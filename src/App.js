import React, { useEffect } from 'react'

import './App.css';
import Menu from './js/containers/Menu';
import { fetchCatalog } from './js/actions/catalog'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'wouter'
import { ROOT } from '../src/js/common/routes'
import CircularProgress from '@material-ui/core/CircularProgress'

const getInitialData = () => dispatch =>
  Promise.all([
    dispatch(fetchCatalog())
  ])

const App = ({ catalogFetched, getInitialData }) => {
  useEffect(() => {
    getInitialData()
  }, [])


  return catalogFetched ? (
    <Switch>
      <Route path={ROOT}>{props => <Menu />}</Route>
      <Redirect to={ROOT} />
    </Switch>
  ) : (
    <CircularProgress  size={50} />
  )
}

  const mapStateToProps = ({
    catalog: { fetched: catalogFetched },
  }) => ({
    catalogFetched,
  })
  const mapDispatchToProps = {  getInitialData }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App)


