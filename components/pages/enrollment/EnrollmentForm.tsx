import { Button, Card, CardActions, CardContent, Container, FormGroup, Stack, Typography, useMediaQuery, useTheme, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import EnrollmentType from './enrollmentType';
import GenderButtons from './content/inputs/GenderButtons';
import NameInput from './content/inputs/NameInput';
import BirthdateInput from './content/inputs/BirthdateInput';
import EmailInput from './content/inputs/EmailInput';
import AddressInput from './content/inputs/AddressInput';
import ZIPInput from './content/inputs/ZIPInput';
import CountryCodeInput from './content/inputs/CountryCodeInput';
import PhoneInput from './content/inputs/PhoneInput';
import LicenceInput from './content/inputs/LicenceInput';
import { useTranslation } from 'next-export-i18n';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const EnrollmentForm = () => {
  const [values, setValues] = useState<EnrollmentType>({
    gender: '',
    name: '',
    birthdate: '',
    phone: '',
    zip: '',
    address: '',
    email: '',
    countryCode: '',
    licence: ''
  });
  const [emailError, setEmailError] = useState<false | true>(false);
  const [checkboxStatus, setCheckboxStatus] = useState({
    membCheckbox: false,
    spondCheckbox: false
  });

  const { t } = useTranslation();
  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    setCheckboxStatus({
      ...checkboxStatus,
      [event.target.name]: event.target.checked
    });
    if (emailError) {
      setEmailError(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!emailRegex.test(values.email)) {
      setEmailError(true);
    }
    else {
      console.log(values)
    }
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

              <GenderButtons
                handleChangeToParent={handleChange}
                translation={t}
              />

              <NameInput
                handleChangeToParent={handleChange}
                translation={t}
              />

              <Stack
                direction={mobileQuery ? 'column' : 'row'}
                gap={mobileQuery ? '2rem' : '1rem'}
              >
                <BirthdateInput
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

              <Stack
                direction={mobileQuery ? 'column' : 'row'}
                gap={mobileQuery ? '2rem' : '1rem'}
              >
                <CountryCodeInput
                  handleChangeToParent={handleChange}
                  translation={t}
                  value={values.countryCode}
                />

                <PhoneInput
                  handleChangeToParent={handleChange}
                  translation={t}
                />
              </Stack>

              <LicenceInput
                handleChangeToParent={handleChange}
                translation={t}
                value={values.licence}
              />

              <Stack
                direction={mobileQuery ? 'column' : 'row'}
                gap={mobileQuery ? '2rem' : '1rem'}
              >
                <Checkbox
                  onChange={handleChange}
                  name="membCheckbox"
                />
                <Container>
                  <Typography>
                    {t('enrollment.memberSystem')}
                  </Typography>
                </Container>
              </Stack>

              <Stack
                direction={mobileQuery ? 'column' : 'row'}
                gap={mobileQuery ? '2rem' : '1rem'}
              >
                <Checkbox
                  onChange={handleChange}
                  name="spondCheckbox"
                />
                <Container>
                  <Typography>
                    {t('enrollment.spond')}
                  </Typography>
                </Container>
              </Stack>

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
                  || values.countryCode === ''
                  || values.birthdate.length !== 8
                  || checkboxStatus.membCheckbox === false
                  || checkboxStatus.spondCheckbox === false
              }
            >
              {t('enrollment.button')}
            </Button>
          </CardActions>
        </form>
      
    </Card>
  );
}

export default EnrollmentForm;
