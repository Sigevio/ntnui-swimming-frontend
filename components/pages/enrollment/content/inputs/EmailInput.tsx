import { TextField } from '@mui/material';
import { IEmailInputType } from '../inputType';

const EmailInput = ({ emailError, translation, handleChangeToParent }: IEmailInputType) => {
  return (
    <TextField
      required
      fullWidth
      error={emailError}
      name='email'
      placeholder='ola.normann@ntnui.no'
      label={translation('enrollment.email')[0]}
      InputLabelProps={{
        shrink: true
      }}
      helperText={translation('enrollment.email')[1]}
      FormHelperTextProps={{
        hidden: !emailError
      }}
      onChange={event => handleChangeToParent(event)}
    />
  );
}

export default EmailInput;
