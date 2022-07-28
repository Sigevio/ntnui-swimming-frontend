import { TextField } from '@mui/material';
import { IEmailInputType } from '../inputType';

const EmailInput = (props: IEmailInputType) => {
  return (
    <TextField
      required
      fullWidth
      error={props.emailError}
      name='email'
      placeholder='ola.normann@ntnui.no'
      label={props.translation('enrollment.email')[0]}
      InputLabelProps={{
        shrink: true
      }}
      helperText={props.translation('enrollment.email')[1]}
      FormHelperTextProps={{
        hidden: !props.emailError
      }}
      onChange={event => props.handleChangeToParent(event)}
    />
  );
}

export default EmailInput;
