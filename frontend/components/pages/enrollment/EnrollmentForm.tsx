import { Button, Card, CardActions, CardContent, Container, FormGroup, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import EnrollmentType from './enrollmentType';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';
import GenderButtons from './content/inputs/GenderButtons';
import NameInput from './content/inputs/NameInput';
import BirthdateInput from './content/inputs/BirthdateInput';
import EmailInput from './content/inputs/EmailInput';
import AddressInput from './content/inputs/AddressInput';
import ZIPInput from './content/inputs/ZIPInput';
import CountryCodeInput from './content/inputs/CountryCodeInput';
import PhoneInput from './content/inputs/PhoneInput';
import LicenceInput from './content/inputs/LicenceInput';

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

  const { locale } = useRouter();
  const translation = locale === 'en' ? en : locale === 'fr' ? fr : locale === 'de' ? de : no;
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
                translation={translation}
              />

              <NameInput
                handleChangeToParent={handleChange}
                translation={translation}
              />

              <Stack
                direction={mobileQuery ? 'column' : 'row'}
                gap={mobileQuery ? '2rem' : '1rem'}
              >
                <BirthdateInput
                  handleChangeToParent={handleChange}
                  translation={translation}
                />

                <EmailInput
                  handleChangeToParent={handleChange}
                  translation={translation}
                  emailError={emailError}
                />
              </Stack>

              <Stack
                direction={mobileQuery ? 'column' : 'row'}
                gap={mobileQuery ? '2rem' : '1rem'}
              >
                <AddressInput
                  handleChangeToParent={handleChange}
                  translation={translation}
                />

                <ZIPInput
                  handleChangeToParent={handleChange}
                  translation={translation}
                />
              </Stack>

              <Stack
                direction={mobileQuery ? 'column' : 'row'}
                gap={mobileQuery ? '2rem' : '1rem'}
              >
                <CountryCodeInput
                  handleChangeToParent={handleChange}
                  translation={translation}
                  value={values.countryCode}
                />

                <PhoneInput
                  handleChangeToParent={handleChange}
                  translation={translation}
                />
              </Stack>

              <LicenceInput
                handleChangeToParent={handleChange}
                translation={translation}
                value={values.licence}
              />

              <Container>
                <Typography>
                  {translation.enrollment.disclaimer}
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
              }
            >
              {translation.enrollment.button}
            </Button>
          </CardActions>
        </form>
      
    </Card>
  );
}

export default EnrollmentForm;
