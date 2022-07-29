import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Card, CardContent, FormControl, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { useState } from 'react';

const AdminLogin = ({ loginFailed }: { loginFailed: boolean }) => {
  const { t } = useTranslation();

  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Stack
      height='100vh'
      width='100vw'
      justifyContent='center'
      alignItems='center'
    >
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
                variant='h2'
                textAlign='center'
                fontWeight='bold'
                color='primary'
              >
                {t('admin.login.header')}
              </Typography>

              <TextField
                required
                fullWidth
                name='username'
                label={t('admin.login.username')}
                onChange={handleChange}
              />

              <FormControl>
                <InputLabel
                  htmlFor='password'
                  required
                >
                  {t('admin.login.password')}
                </InputLabel>
                <OutlinedInput
                  required
                  fullWidth
                  name='password'
                  label={t('admin.login.password')}
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment
                      position='end'
                    >
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              {loginFailed ?
                <Typography
                  color='error.main'
                  textAlign='center'
                >
                  {t('admin.login.loginFailed')}
                </Typography> :
                null}

              <Button
                variant='contained'
                sx={{
                  height: '3rem',
                  width: '100%'
                }}
                type='submit'
                disabled={values.username === '' || values.password === ''}
              >
                {t('admin.login.button')}
              </Button>

            </FormGroup>
          </CardContent>
        </form>
      </Card>
    </Stack>
  );
}

export default AdminLogin;
