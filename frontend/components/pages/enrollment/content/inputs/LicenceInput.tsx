import { MenuItem, TextField, useTheme } from '@mui/material';
import { IDropdownInputType } from '../inputType';
import clubs from '../../../../../public/clubs';

const LicenceInput = (props: IDropdownInputType) => {
  const theme = useTheme();

  return (
    <TextField
      name='licence'
      value={props.value}
      select
      label={props.translation.enrollment.licence[0]}
      InputLabelProps={{
        shrink: true
      }}
      onChange={event => props.handleChangeToParent(event)}
      helperText={props.translation.enrollment.licence[1]}
      FormHelperTextProps={{
        style: {
          color: theme.palette.warning.dark
        }
      }}
      SelectProps={{
        MenuProps: {
          PaperProps: {
            style: {
              maxHeight: '14rem'
            }
          }
        }
      }}
    >
      {clubs.map((club: any) => (
        <MenuItem
          key={club}
          value={club}
          sx={{
            height: '2.5rem'
          }}
        >
          {club}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default LicenceInput;
