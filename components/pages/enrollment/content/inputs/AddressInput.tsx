import { TextField } from '@mui/material';
import { IInputType } from '../inputType';

const AddressInput = (props: IInputType) => {
  return (
    <TextField
      required
      fullWidth
      name='address'
      placeholder='Gate Gatesen 69A'
      label={props.translation('enrollment.address')[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => props.handleChangeToParent(event)}
    />
  );
}

export default AddressInput;
