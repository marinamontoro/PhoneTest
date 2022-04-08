/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as style from './style'
import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { I18nContext } from '../../containers/i18n'
import { setFav, deletePhone } from '../../actions/catalog';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Delete from '@material-ui/icons/Delete';
import PhoneDetails from '../phoneDetails';
import CustomModal from '../modal';

const useStyles = makeStyles({
  root: {
    width: 295,
    height: 500,
    margin: 5
  },
  container:{
    display: 'flex',
    flexWrap:'wrap'
  },
  content: {
    justifyContent: 'space-between'
  },
  media: {
    height: 275,
  },
  title: {
    color: 'grey',
  },
  filledStar: {
      color:'red'
  },
  description: {
    display: '-webkit-box',
    maxWidth: '100%',
    height: '43px',
    margin: '0 auto',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    lineHeight: 1,
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical'
  }
});

const Catalog = ({ fav, catalog, setFav, catalogFetched, deletePhone }) => {
  const { t } = useContext(I18nContext)
  const classes = useStyles();
  const [openDetails, setOpenDetails] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [phoneSelected, setPhoneSelected] = React.useState({});

  const phones = fav ? catalog.filter((phone) => phone.fav === true) : catalog

  const handleFav = (item) => {
        setFav( item )
  };

  const handleDelete = (phone) => {
    setOpenDelete(true);
    setPhoneSelected(phone)
  };

  const handleClickOpen = (phone) => {
    setOpenDetails(true);
    setPhoneSelected(phone)
  };

  const handleDeletePhone = (phone) => {
    deletePhone(phone);
  };

  return catalogFetched && phones.length > 0 ?  
    (
      <div>
        <h2>{!fav ? 'Phone list' : 'Favorites'}</h2>
        <div className={classes.container} >
          {phones.map((item) => (
            <Card className={classes.root} key={item.id}>
              <CardActionArea onClick={(e) => handleClickOpen(item)}>
                <CardMedia
                  className={classes.media}
                  image={'/assets/img/'+item.imageFileName}
                  title={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                  </Typography>
                  <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                  {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.content}>
                <IconButton aria-label="add to favorites" onClick={e=> handleFav(item)} >
                  <FavoriteIcon className={item.fav ? classes.filledStar : classes.title}/>
                </IconButton>
                <IconButton aria-label="delete phone" onClick={e=> handleDelete(item)} >
                  <Delete className={classes.title}/>
                </IconButton>
              </CardActions>
            </Card>
          ))}
          <PhoneDetails open={openDetails} phone={phoneSelected} onClose={()=> setOpenDetails(false)}></PhoneDetails>
          <CustomModal open={openDelete} phone={phoneSelected} onClose={()=> setOpenDelete(false)} onDelete={()=>handleDeletePhone(phoneSelected)}></CustomModal>
        </div>
      </div>
    ) 
    : catalogFetched && phones.length === 0 ?
        t('emptyFav')
        : <div>
            <CircularProgress className={style.loadingIcon} size={50} />
          </div>
}

const mapStateToProps = ({ catalog: { language, view, fav, catalog, fetched: catalogFetched }}) => ({
    language,
    view,
    fav,
    catalog,
    catalogFetched
  })
  const mapDispatchToProps = {
    setFav,
    deletePhone
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
  