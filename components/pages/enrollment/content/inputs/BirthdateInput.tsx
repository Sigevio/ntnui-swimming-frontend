import { TextField } from '@mui/material';
import { IInputType } from '../inputType';
import { DateMask } from '../Masks';

const BirthdateInput = ({ translation, handleChangeToParent }: IInputType) => {
  return (
    <TextField
      required
      fullWidth
      name='birthdate'
      InputProps={{
        inputComponent: DateMask as any
      }}
      label={translation('enrollment.birth')[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => handleChangeToParent(event)}
    />
  );
}

export default BirthdateInput;
