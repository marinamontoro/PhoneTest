/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { I18nContext } from '../../containers/i18n'
import { savePhone } from '../../actions/catalog';
import FileInput from '../fileInput/fileInput';
import { isEmpty } from 'ramda';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  textDesc: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '42ch',
  },
  container:{
    display: 'flex',
    flexWrap:'wrap',
    order:3

  },
  form:{
    paddingTop: '50px'
  },
  formFile:{
    paddingTop: '50px',
    height: '250px'
  },
  button:{
    float:'right'
  }
}));
const defaultPhone ={
  id:-1,
  name:'',
  manufacturer:'',
  description:'',
  color:'',
  price:'',
  image:'',
  screen:'',
  processor:'',
  ram:''
}


const Phone = ({ savePhone }) => {
  const classes = useStyles();
  const { t } = useContext(I18nContext)
  const [phone, setPhone] = useState(defaultPhone)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e, type) => {
    type && setPhone({...phone, [type]: e.target.value})
  };

  const handleSave  = (phone) => {
    let errorList = {};
    if(phone.name === '') {
        errorList = {...errorList, name: 'error'}
    }
    if(phone.manufacturer === ''){
      errorList = {...errorList, manufacturer: 'error'}
    }
    if(phone.color === ''){
      errorList = {...errorList, color: 'error'}
    }
    if(phone.screen === ''){
      errorList = {...errorList, screen: 'error'}
    }
    if(phone.processor === ''){
      errorList = {...errorList, processor: 'error'}
    }
    if(phone.ram === ''){
      errorList = {...errorList, ram: 'error'}
    }
    if(phone.description === ''){
      errorList = {...errorList, description: 'error'}
    }
    setErrors(errorList)
    if(isEmpty(errorList)) {
      savePhone({...phone, imageFileName: 'IPhone_8.png'}); 
      setSuccess(true);
    }
  };

  return (
  <div>
      <h2>{t('addPhone')}</h2>
      {!success ? 
      <form className={classes.root}>
        <div >
          <div className={classes.form}>
            <TextField required className={classes.textField} id="standard-required" label={t('name')} onChange={e=>handleChange(e,'name')}  error={!!errors.name}/>
            <TextField required className={classes.textField} id="standard-disabled" label={t('manufacturer')} onChange={e=>handleChange(e,'manufacturer')}  error={!!errors.manufacturer}/>
            <TextField required className={classes.textField} id="standard-disabled" label={t('color')} onChange={e=>handleChange(e,'color')}  error={!!errors.color}/>
          </div>
          <div className={classes.form}>
            <TextField required className={classes.textField} id="standard-disabled" label={t('screen')} onChange={e=>handleChange(e,'screen')}  error={!!errors.screen}/>
            <TextField required className={classes.textField} id="standard-disabled" label={t('processor')} onChange={e=>handleChange(e,'processor')} error={!!errors.processor}/>
            <TextField required className={classes.textField} id="standard-disabled" label={t('ram')} onChange={e=>handleChange(e,'ram')}  error={!!errors.ram}/>
          </div>
          <div className={classes.formFile}>
            <TextField 
              required          
              multiline
              maxRows={10} 
              className={classes.textDesc} 
              id="standard-disabled" 
              label={t('description')} 
              onChange={e=>handleChange(e,'description')}  
              error={!!errors.description}/>
            <FileInput/>
          </div>  
          {/* <input type="file"  value={selectedFile} 
          onChange={(e) => setSelectedFile(e.target.files[0])}/> */}
          <div className={classes.button}>
            <Button variant="contained" color="primary" onClick={()=>handleSave(phone)}>
              {t('add')}
            </Button>
          </div>  
        </div>
      </form>
      :
      <div>
        <Alert severity="success">{t('successPhone')}</Alert>
      </div>
    }
  </div>
  )
}

const mapStateToProps = ({catalog: {language, view, fav, catalog, fetched: catalogFetched}}) => ({
  language,
  view,
  fav,
  catalog,
  catalogFetched
})
const mapDispatchToProps = {
  savePhone
}
export default connect(mapStateToProps, mapDispatchToProps)(Phone)
