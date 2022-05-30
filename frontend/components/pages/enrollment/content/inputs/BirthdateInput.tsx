import { TextField } from '@mui/material';
import { IInputType } from '../inputType';
import { DateMask } from '../Masks';

const BirthdateInput = (props: IInputType) => {
  return (
    <TextField
      required
      fullWidth
      name='birthdate'
      InputProps={{
        inputComponent: DateMask as any
      }}
      label={props.translation.enrollment.birth[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => props.handleChangeToParent(event)}
    />
  );
}

export default BirthdateInput;
