import React, { useContext } from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as style from './style'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { I18nContext } from '../../containers/i18n'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function PhoneDetails({open, phone, onClose}) {
  const { t } = useContext(I18nContext)

  return (
    <div>
      <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          {phone.name}
        </DialogTitle>
        <DialogContent dividers>
          <div><label sx={style.labelDetails}>{t('price')}</label> {phone.price}€</div>
          <div><label sx={style.labelDetails}>{t('description')}</label> {phone.description} </div>
          <div><label sx={style.labelDetails}>{t('manufacturer')}</label> {phone.manufacturer}</div>
          <div><label sx={style.labelDetails}>{t('color')}</label> {phone.color}</div>
          <div><label sx={style.labelDetails}>{t('screen')}</label> {phone.screen}</div>
          <div><label sx={style.labelDetails}>{t('processor')}</label> {phone.processor}</div>
          <div><label sx={style.labelDetails}>{t('RAM')}</label> {phone.ram}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
