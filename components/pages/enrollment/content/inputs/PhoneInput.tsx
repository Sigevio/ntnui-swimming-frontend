import { useTheme } from '@mui/material';
import { IInputType } from '../inputType';
import { default as PhoneField } from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

const inputProps = {
  name: 'phone',
  required: true
}

const PhoneInput = ({ translation, handleChangeToParent }: IInputType) => {
  const theme = useTheme();

  const inputStyle = {
    backgroundColor: '#ffffff00',
    color: theme.palette.text.primary,
    width: '100%',
    '&.special-label': {
      background: '#ffffff00',
      color: theme.palette.text.secondary,
      cursor: 'none'
    },
    '&.form-control': {
      '&:focus': {
        borderColor: theme.palette.primary.main,
        boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
        '&+div:before': {
          color: theme.palette.primary.main
        }
      }
    }
  }

  const dropdownStyle = {
    backgroundColor: theme.palette.background.paper
  }

  const handleChange = (e: string) => {
    const event = {
      target: {
        name: 'phone',
        value: e
      }
    }
    handleChangeToParent(event);
  }

  return (
    <PhoneField
      inputProps={inputProps}
      inputStyle={inputStyle}
      dropdownStyle={dropdownStyle}
      placeholder='+47 420 69 420'
      specialLabel={`${translation('enrollment.phone')[0]} *`}
      onChange={e => handleChange(e)}
    />
  );
}

export default PhoneInput;
