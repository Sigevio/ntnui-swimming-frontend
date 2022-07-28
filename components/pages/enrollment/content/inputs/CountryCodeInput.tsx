import { MenuItem, Stack, TextField, Typography } from '@mui/material';
import { IDropdownInputType } from '../inputType';
import countryCodes from '../../../../../public/countryCodes';

const CountryCodeInput = (props: IDropdownInputType) => {
  return (
    <TextField
      required
      name='countryCode'
      fullWidth
      value={props.value}
      select
      label={props.translation('enrollment.countryCode')}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => props.handleChangeToParent(event)}
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
      {countryCodes.map((countryCode: any) => (
        <MenuItem
          key={countryCode[0]}
          value={countryCode[1]}
          sx={{
            height: '2.5rem'
          }}
        >
          <Stack
            direction='row'
            gap='1rem'
          >
            <Typography>
              {countryCode[1]}
            </Typography>
            <Typography
              color='text.secondary'
            >
              {'(' + countryCode[0] + ')'}
            </Typography>
          </Stack>
        </MenuItem>
      ))}
    </TextField>
  );
}

export default CountryCodeInput;
