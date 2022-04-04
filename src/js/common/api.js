import { clone } from 'ramda'

import store from '../store'

const buildFilesFormData = files =>
  files.reduce((formData, file) => formData.append('file', file, file.name), new FormData())
const replacer = (_, value) => (typeof value === 'string' ? value || null : value)

export default class Api {
  constructor(options = { baseUrl: 'api/', defaultOptions: {} }) {
    this.baseUrl = options.baseUrl
    this.defaultOptions = {
      credentials: 'same-origin',
      ...options.defaultOptions,
    }
    this.defaultOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.defaultOptions.headers,
    }
  }

  getUrl = originalUrl => `${this.baseUrl}${originalUrl}`

  fetch = (url, options) =>
    fetch(url, options)
      .then(this.parseBody)
      .then(this.checkStatus.bind(this, url, options))

  parseBody(response) {
    const contentType = response.headers.get('Content-Type')
    let parsePromise
    if (/json/.test(contentType)) {
      parsePromise = response.json()
    } else if (/multipart/.test(contentType)) {
      parsePromise = response.formData()
    } else if (/pdf|xml/.test(contentType)) {
      parsePromise = response.blob()
    } else {
      parsePromise = response.text()
    }
    return parsePromise.then(parsedBody => ({ response, parsedBody }))
  }

  checkStatus(url, originalOptions, { response, parsedBody }) {
    if (response.ok) {
      return parsedBody
    }
    switch (response.status) {
      case 401:
      case 403:
        const loginUrl = store.getState().globals.data.loginUrl
        const hash = window.location.hash.replace(/^(.*\?).*$/, '$1')
        window.location = loginUrl + encodeURIComponent(hash)
        break
      default:
        throw response.status
    }
  }

  // Request
  genericRequest(method, originalUrl, options) {
    const url = this.getUrl(originalUrl)
    const opt = { ...clone(this.defaultOptions), ...options, method }
    opt.headers = { ...this.defaultOptions.headers, ...options.headers }
    if (options?.body instanceof FormData) {
      delete opt.headers['Content-Type']
    }
    if (opt.headers['Content-Type'] === 'application/json') {
      opt.body = JSON.stringify(opt.body, replacer)
    }
    return this.fetch(url, opt)
  }

  get = (originalUrl, options = {}) =>
    this.genericRequest('get', originalUrl, {
      ...options,
      headers: { ...options.headers, 'Content-Type': null },
    })

  post = (originalUrl, options = {}) => this.genericRequest('post', originalUrl, options)

  put = (originalUrl, options = {}) => this.genericRequest('put', originalUrl, options)

  delete(originalUrl, options = {}) {
    options.headers = options.headers || {}
    options.headers.Accept = options.headers.Accept || '*'
    return this.genericRequest('delete', originalUrl, options)
  }

  uploadFiles = (url, files) => this.post(url, { body: buildFilesFormData(files) })
}
