const composeObjectName = (match, p1) => {
    return p1.toUpperCase()
  }
  
  const actionTypeRegexp = /\w+?_(\w+)_(PENDING|REJECTED|FULFILLED)/
  const storeNameRegexp = /_(\w)/g
  
  export default type => {
    const captureResults = actionTypeRegexp.exec(type)
  
    if (!captureResults) return {}
  
    const storeName = captureResults[1].toLowerCase().replace(storeNameRegexp, composeObjectName)
    const status = captureResults[2]
  
    return { storeName, status }
  }
  