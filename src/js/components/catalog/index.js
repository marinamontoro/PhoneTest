/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as style from './style'
import { useContext } from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { I18nContext } from '../../containers/i18n'

const Catalog = ({ catalog, catalogFetched }) => {
  const { t } = useContext(I18nContext)

  return catalogFetched && catalog.length > 0 ?  
    (
      <div>
        <h2>{'Phone list'}</h2>
        <div >
          {catalog.map((item) => (
            item.name
          ))}
        </div>
      </div>
    ) 
    : catalogFetched && catalog.length === 0 ?
        t('emptyList')
        : <div>
            <CircularProgress className={style.loadingIcon} size={50} />
          </div>
}

const mapStateToProps = ({ catalog: { catalog, fetched: catalogFetched }}) => ({
    catalog,
    catalogFetched
  })
  const mapDispatchToProps = {
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
  