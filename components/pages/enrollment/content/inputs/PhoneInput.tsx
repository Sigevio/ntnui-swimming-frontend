import { TextField } from '@mui/material';
import { IInputType } from '../inputType';
import { PhoneMask } from '../Masks';

const PhoneInput = (props: IInputType) => {
  return (
    <TextField
      required
      fullWidth
      name='phone'
      InputProps={{
        inputComponent: PhoneMask as any
      }}
      label={props.translation('enrollment.phone')[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => props.handleChangeToParent(event)}
    />
  );
}

export default PhoneInput;
