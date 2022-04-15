import { Button, Card, CardActions, CardContent, Container, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, Radio, RadioGroup, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import React, { forwardRef, useState } from 'react';
import NumberFormat from 'react-number-format';
import EnrollmentType from './enrollmentType';
import clubs from '../../../public/clubs';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';

interface InputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const PhoneMask = forwardRef<NumberFormat<any>, InputProps>(
  function PhoneMask(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        format='### ## ###'
        placeholder='### ## ###'
        mask={['#', '#', '#', '#', '#', '#', '#', '#']}
        isNumericString
      />
    );
  }
);

const ZIPMask = forwardRef<NumberFormat<any>, InputProps>(
  function ZIPMask(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        format='####'
        placeholder='####'
        mask={['#', '#', '#', '#']}
        isNumericString
      />
    );
  }
);

const DateMask = forwardRef<NumberFormat<any>, InputProps>(
  function DateMask(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        format='##/##/####'
        placeholder='dd/mm/yyyy'
        mask={['d', 'd', 'm', 'm', 'y', 'y', 'y', 'y']}
        isNumericString
      />
    );
  }
);

const currencies = [
  {
    value: 'Empty',
    label: ''
  },
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  },
];

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const EnrollmentForm = () => {
  const [values, setValues] = useState<EnrollmentType>({
    gender: '',
    name: '',
    phone: '',
    zip: '',
    address: '',
    email: '',
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
    if (emailRegex.test(values.email)) {
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

              <FormControl
                margin='dense'
                sx={{
                  marginLeft: '1rem'
                }}
              >
                <FormLabel
                  required
                  id='gender-buttons-label'
                  sx={{
                    fontSize: '0.75rem'
                  }}
                >
                  {translation.enrollment.gender[0]}
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby='gender-buttons-label'
                  name='gender'
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value='male'
                    control={
                      <Radio />
                    }
                    label={translation.enrollment.genderMale}
                  />
                  <FormControlLabel
                    value='female'
                    control={
                      <Radio />
                    }
                    label={translation.enrollment.genderFemale}
                  />
                </RadioGroup>
              </FormControl>

              <Stack
                direction={mobileQuery ? 'column' : 'row'}
                gap={mobileQuery ? '2rem' : '1rem'}
              >
                <TextField
                  required
                  fullWidth
                  name='name'
                  placeholder='Ola Normann'
                  label={translation.enrollment.fullName[0]}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleChange}
                />

                <TextField
                  required
                  fullWidth
                  error={emailError}
                  name='email'
                  placeholder='ola.normann@ntnui.no'
                  label={translation.enrollment.email[0]}
                  InputLabelProps={{
                    shrink: true
                  }}
                  helperText={translation.enrollment.email[1]}
                  FormHelperTextProps={{
                    hidden: !emailError
                  }}
                  onChange={handleChange}
                />
              </Stack>

              <Stack
                direction={mobileQuery ? 'column' : 'row'}
                gap={mobileQuery ? '2rem' : '1rem'}
              >
                <TextField
                  required
                  fullWidth
                  name='date'
                  InputProps={{
                    inputComponent: DateMask as any
                  }}
                  label={translation.enrollment.birth[0]}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleChange}
                />

                <TextField
                  required
                  fullWidth
                  name='phone'
                  type='tel'
                  InputProps={{
                    inputComponent: PhoneMask as any
                  }}
                  label={translation.enrollment.phone[0]}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleChange}
                />
              </Stack>

              <Stack
                direction={mobileQuery ? 'column' : 'row'}
                gap={mobileQuery ? '2rem' : '1rem'}
              >
                <TextField
                  required
                  fullWidth
                  name='address'
                  placeholder='Gate Gatesen 69A'
                  label={translation.enrollment.address[0]}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleChange}
                />

                <TextField
                  required
                  fullWidth
                  name='zip'
                  InputProps={{
                    inputComponent: ZIPMask as any
                  }}
                  label={translation.enrollment.zip[0]}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleChange}
                />
              </Stack>

              <TextField
                name='licence'
                value={values.licence}
                select
                label={translation.enrollment.licence[0]}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={handleChange}
                helperText={translation.enrollment.licence[1]}
                FormHelperTextProps={{
                  style: {
                    color: theme.palette.warning.dark
                  }
                }}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      style: {
                        maxHeight: '14rem'
                      }
                    }
                  }
                }}
              >
                {clubs.map((club) => (
                  <MenuItem
                    key={club}
                    value={club}
                    sx={{
                      height: '2.5rem'
                    }}
                  >
                    {club}
                  </MenuItem>
                ))}
              </TextField>

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
                  || values.name === ''
                  || values.phone === ''
                  || values.zip === ''
                  || values.address === ''
                  || values.email === ''
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
