import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { IInputType } from '../inputType';

const GenderButtons = (props: IInputType) => {
  return (
    <FormControl
      margin='dense'
      sx={{
        marginLeft: '1rem'
      }}
    >
      <FormLabel
        required
        id='gender-buttons-label'
        sx={{
          fontSize: '0.75rem'
        }}
      >
        {props.translation.enrollment.gender[0]}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby='gender-buttons-label'
        name='gender'
        onChange={event => props.handleChangeToParent(event)}
      >
        <FormControlLabel
          value='male'
          control={
            <Radio />
          }
          label={props.translation.enrollment.genderMale}
        />
        <FormControlLabel
          value='female'
          control={
            <Radio />
          }
          label={props.translation.enrollment.genderFemale}
        />
      </RadioGroup>
    </FormControl>
  );
}

export default GenderButtons;
