import { TextField } from '@mui/material';
import { IInputType } from '../inputType';

const AddressInput = ({ translation, handleChangeToParent }: IInputType) => {
  return (
    <TextField
      required
      fullWidth
      name='address'
      placeholder='Gate Gatesen 69A'
      label={translation('enrollment.address')[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => handleChangeToParent(event)}
    />
  );
}

export default AddressInput;
