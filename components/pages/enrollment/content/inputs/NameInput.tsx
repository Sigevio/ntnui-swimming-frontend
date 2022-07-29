import { TextField } from '@mui/material';
import { IInputType } from '../inputType';

const NameInput = ({ translation, handleChangeToParent }: IInputType) => {
  return (
    <TextField
      required
      fullWidth
      name='name'
      placeholder='Ola Normann'
      label={translation('enrollment.fullName')[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => handleChangeToParent(event)}
    />
  );
}

export default NameInput;
