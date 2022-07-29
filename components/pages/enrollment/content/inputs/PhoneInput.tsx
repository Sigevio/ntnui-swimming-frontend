import { TextField } from '@mui/material';
import { IInputType } from '../inputType';
import { PhoneMask } from '../Masks';

const PhoneInput = ({ translation, handleChangeToParent }: IInputType) => {
  return (
    <TextField
      required
      fullWidth
      name='phone'
      InputProps={{
        inputComponent: PhoneMask as any
      }}
      label={translation('enrollment.phone')[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => handleChangeToParent(event)}
    />
  );
}

export default PhoneInput;
