import { Button, Card, CardActions, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, FormGroup, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import IEnrollment from './enrollmentType';
import GenderButtons from './content/inputs/GenderButtons';
import NameInput from './content/inputs/NameInput';
import BirthdateInput from './content/inputs/BirthdateInput';
import EmailInput from './content/inputs/EmailInput';
import AddressInput from './content/inputs/AddressInput';
import ZIPInput from './content/inputs/ZIPInput';
import PhoneInput from './content/inputs/PhoneInput';
import LicenceInput from './content/inputs/LicenceInput';
import { useTranslation } from 'next-export-i18n';
import { enrollmentApi } from './content/api';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const EnrollmentForm = () => {
  const [values, setValues] = useState<IEnrollment>({
    gender: '',
    name: '',
    birthDate: '',
    phone: '',
    zip: '',
    address: '',
    email: '',
    licence: ''
  });
  const [emailError, setEmailError] = useState<boolean>(false);

  const [isEnrolling, setIsEnrolling] = useState<boolean>(false);
  const [isEnrollmentError, setIsEnrollmentError] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const { t } = useTranslation();
  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    if (emailError) {
      setEmailError(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsEnrolling(true);
    console.log(values)
    if (!emailRegex.test(values.email)) {
      setEmailError(true);
    }
    else {
      await enrollmentApi.enroll(values)
        .then(res => {
          console.log('Enrollment successful!');
          console.log(values);
        })
        .catch(err => {
          if (err.response) {
            console.log(`Enrollment status code: ${err.response.status}`);
          }
          setIsEnrollmentError(true);
        })
        .finally(() => {
          setIsEnrolling(false);
          handleDialog(true);
        });
    }
  }

  const handleDialog = (value: boolean) => {
    setDialogOpen(value);
  }

  return (
    <>
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

                <GenderButtons
                  handleChangeToParent={handleChange}
                  translation={t}
                />

                <Stack
                  direction={mobileQuery ? 'column' : 'row'}
                  gap={mobileQuery ? '2rem' : '1rem'}
                >
                  <NameInput
                    handleChangeToParent={handleChange}
                    translation={t}
                  />

                  <BirthdateInput
                    handleChangeToParent={handleChange}
                    translation={t}
                  />
                </Stack>

                <Stack
                  direction={mobileQuery ? 'column' : 'row'}
                  gap={mobileQuery ? '2rem' : '1rem'}
                >
                  <PhoneInput
                    handleChangeToParent={handleChange}
                    translation={t}
                  />

                  <EmailInput
                    handleChangeToParent={handleChange}
                    translation={t}
                    emailError={emailError}
                  />
                </Stack>

                <Stack
                  direction={mobileQuery ? 'column' : 'row'}
                  gap={mobileQuery ? '2rem' : '1rem'}
                >
                  <AddressInput
                    handleChangeToParent={handleChange}
                    translation={t}
                  />

                  <ZIPInput
                    handleChangeToParent={handleChange}
                    translation={t}
                  />
                </Stack>

                <LicenceInput
                  handleChangeToParent={handleChange}
                  translation={t}
                  value={values.licence}
                />

                <Container>
                  <Typography>
                    {t('enrollment.disclaimer')}
                  </Typography>
                </Container>

              </FormGroup>
          </CardContent>

            <CardActions
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              <Button
                variant='contained'
                sx={{
                  height: '3rem',
                  width: '100%'
                }}
                type='submit'
                disabled={
                  values.gender === ''
                    || values.name === ''
                    || values.phone === ''
                    || values.zip === ''
                    || values.address === ''
                    || values.email === ''
                    || values.birthDate.length !== 8
                }
              >
                {t(`enrollment.${isEnrolling ? 'working' : 'button'}`)}
              </Button>
            </CardActions>
          </form>
        
      </Card>

      <Dialog
        open={dialogOpen}
        onClose={() => handleDialog(false)}
      >
        <DialogContent>
          <DialogContentText
            color='text.primary'
            variant='h4'
          >
            {t(`enrollment.${isEnrollmentError ? 'errorMessage' : 'successMessage'}`)[0]}
          </DialogContentText>
          <DialogContentText
            color='text.secondary'
          >
            {t(`enrollment.${isEnrollmentError ? 'errorMessage' : 'successMessage'}`)[1]}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleDialog(false)}
          >
            {t('enrollment.closeButton')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EnrollmentForm;
