import { Check, Paid, ShoppingCart, ThumbUp, Warning } from '@mui/icons-material';
import { StepConnector, stepConnectorClasses, StepIconProps, styled } from '@mui/material';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300],
    borderTopWidth: 3,
    borderRadius: 1
  }
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[400],
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4'
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    }
  })
);

const QontoStepIcon = (props: StepIconProps) => {
  const { active, completed, className, error } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <ShoppingCart />,
    2: <Paid />,
    3: <ThumbUp />
  }

  return (
    <QontoStepIconRoot
      ownerState={{ active }}
      className={className}
    >
      {completed ? (
        <Check
          className="QontoStepIcon-completedIcon"
        />
      ) : (
        error ? <Warning color='error' /> : icons[String(props.icon)]
      )}
    </QontoStepIconRoot>
  );
}

export {
  QontoConnector,
  QontoStepIcon
}