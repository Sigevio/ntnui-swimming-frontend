import { forwardRef } from 'react';
import NumberFormat from 'react-number-format';

interface InputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const ZIPMask = forwardRef<NumberFormat<any>, InputProps>(
  function ZIPMask(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        isNumericString
      />
    );
  }
);

const DateMask = forwardRef<NumberFormat<any>, InputProps>(
  function DateMask(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        format='##/##/####'
        placeholder={'dd/mm/yyyy'}
        mask={['d', 'd', 'm', 'm', 'y', 'y', 'y', 'y']}
        isNumericString
      />
    );
  }
);

const PhoneMask = forwardRef<NumberFormat<any>, InputProps>(
  function PhoneMask(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        format='### ## ### ## ## ## ## ## ## ## ## ## ## ##'
        isNumericString
      />
    );
  }
);

export {
  ZIPMask,
  DateMask,
  PhoneMask
};
