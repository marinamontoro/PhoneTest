import { compose, lensPath } from 'ramda'

export default (lens, ...path) =>
  compose(
    lens,
    lensPath(path)
  )
