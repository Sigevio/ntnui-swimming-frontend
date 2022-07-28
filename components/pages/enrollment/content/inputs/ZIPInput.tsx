import { TextField } from '@mui/material';
import { IInputType } from '../inputType';
import { ZIPMask } from '../Masks';

const ZIPInput = (props: IInputType) => {
  return (
    <TextField
      required
      fullWidth
      name='zip'
      InputProps={{
        inputComponent: ZIPMask as any
      }}
      label={props.translation('enrollment.zip')[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => props.handleChangeToParent(event)}
    />
  );
}

export default ZIPInput;
