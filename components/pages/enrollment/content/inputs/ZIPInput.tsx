import { TextField } from '@mui/material';
import { IInputType } from '../inputType';
import { ZIPMask } from '../Masks';

const ZIPInput = ({ translation, handleChangeToParent }: IInputType) => {
  return (
    <TextField
      required
      fullWidth
      name='zip'
      InputProps={{
        inputComponent: ZIPMask as any
      }}
      label={translation('enrollment.zip')[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => handleChangeToParent(event)}
    />
  );
}

export default ZIPInput;
