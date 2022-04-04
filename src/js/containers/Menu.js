/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

import React, { useState, useEffect, useRef, useContext } from 'react'
import clsx from 'clsx';
import { connect } from 'react-redux'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { I18nContext } from '../containers/i18n'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { setLanguage, changeView } from '../actions/catalog';
import * as style from './style';
import Catalog from '../components/catalog';
import Phone from '../components/phone';
import { AddIcCall, Favorite, ListAlt } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
     display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    marginRight: theme.spacing(2),
  },
  title:{
    flexGrow:1
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Menu = ({setLanguage, language, changeView, view}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { t, lang, changeLang } = useContext(I18nContext)

  useEffect(() => {
    changeLang(language)
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    changeLang(e.target.value)
    setLanguage({ language: e.target.value })
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            {t('phoneCatalog')}
          </Typography>
          <Select
            sx= {style.lang}
            value={language || lang}
            onChange={handleChange}
          >
            <MenuItem value={'en'}>EN</MenuItem>
            <MenuItem value={'es'}>ES</MenuItem>
        </Select>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem 
            button key={'Phone list'}
            onClick={()=>changeView('list')}
          >
            <ListItemIcon>{ <ListAlt />}</ListItemIcon>
            <ListItemText primary={t('phoneList')} />
          </ListItem>
          <ListItem 
            button key={'Favourites'}
            onClick={()=> changeView('fav')}
            >
            <ListItemIcon>{ <Favorite />}</ListItemIcon>
            <ListItemText primary={t('favourites')} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem 
            button key={'Add a phone'}
            onClick={()=> changeView('phone')}
            >
            <ListItemIcon>{ <AddIcCall />}</ListItemIcon>
            <ListItemText primary={t('addPhone')} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {view === 'phone' ? <Phone/> : <Catalog/>}
      </main>
    </div>
  );
}

const mapStateToProps = ({catalog: {language, view} }) => ({
  language,
  view
})
const mapDispatchToProps = {
  setLanguage,
  changeView
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)
