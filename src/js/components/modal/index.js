import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { I18nContext } from '../../containers/i18n'

export default function CustomModal({ open, phone, onClose, onDelete }) {
  const { t } = useContext(I18nContext)

  const handleDeletePhone = (phone) => {
    onDelete(phone);
    onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('deletePhone')(phone.name)}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b>{t('sureDelete')(phone.name)}</b> <br/>
            {t('messageDelete')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {t('close')}
          </Button>
          <Button onClick={handleDeletePhone} color="primary" autoFocus>
            {t('delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}