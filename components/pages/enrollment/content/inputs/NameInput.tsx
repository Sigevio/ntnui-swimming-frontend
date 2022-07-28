import { TextField } from '@mui/material';
import { IInputType } from '../inputType';

const NameInput = (props: IInputType) => {
  return (
    <TextField
      required
      fullWidth
      name='name'
      placeholder='Ola Normann'
      label={props.translation.enrollment.fullName[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => props.handleChangeToParent(event)}
    />
  );
}

export default NameInput;
