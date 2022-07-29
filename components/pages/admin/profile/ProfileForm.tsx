import { Button, Card, CardContent, FormGroup, TextField, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { useState } from 'react';

const ProfileForm = () => {
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword1: '',
    newPassword2: '',
    submitFailed: false
  });

  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (values.newPassword1 !== values.newPassword2) {
      setValues({
        ...values,
        submitFailed: true
      })
    }
    event.preventDefault();
  }

  return (
    <Card
      elevation={3}
      sx={{
        width: '95vw',
        maxWidth: '50rem'
      }}
    >
      <form
        onSubmit={handleSubmit}
        noValidate
      >
        <CardContent>
          <FormGroup
            sx={{
              width: '100%',
              gap: '2rem'
            }}
          >

            <Typography
              variant='h4'
              textAlign='center'
              color='primary'
            >
              {t('admin.profile.passwordHeader')}
            </Typography>

            <TextField
              required
              fullWidth
              name='currentPassword'
              type='password'
              label={t('admin.profile.currentPassword')}
              onChange={handleChange}
            />

            <TextField
              required
              fullWidth
              name='newPassword1'
              type='password'
              label={t('admin.profile.newPassword')}
              onChange={handleChange}
            />

            <TextField
              required
              fullWidth
              name='newPassword2'
              type='password'
              label={t('admin.profile.repeatNewPassword')}
              onChange={handleChange}
            />

            {values.submitFailed ?
              <Typography
                color='error.main'
                textAlign='center'
              >
                {t('admin.profile.submitFailed')}
              </Typography> :
              null}

            <Button
              variant='contained'
              sx={{
                height: '3rem',
                width: '100%'
              }}
              type='submit'
              disabled={values.currentPassword === '' || values.newPassword1 === '' || values.newPassword2 === ''}
            >
              {t('admin.profile.submitButton')}
            </Button>

          </FormGroup>
        </CardContent>
      </form>
    </Card>
  );
}

export default ProfileForm;
