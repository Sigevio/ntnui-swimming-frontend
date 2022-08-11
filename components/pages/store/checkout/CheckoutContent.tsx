import { Check, Paid, ShoppingCart, ThumbsUpDown } from '@mui/icons-material';
import { Button, Container, Stack, Step, StepConnector, stepConnectorClasses, StepIconProps, StepLabel, Stepper, styled, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ItemProps } from '../content/content/StoreItemComponents';
import { items } from '../items';
import Confimation from './components/confirmation/Confirmation';
import MyItem from './components/myItem/MyItem';
import Payment from './components/payment/Payment';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300],
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[400],
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <ShoppingCart />,
    2: <Paid />,
    3: <ThumbsUpDown />,
  };

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        icons[String(props.icon)]
      )}
    </QontoStepIconRoot>
  );
}

const CheckoutContent = () => {
  const item = parseInt(useRouter().query.item as string, 10) - 1;

  const [activeStep, setActiveStep] = useState<number>(0);

  const { t } = useTranslation();

  const steps = [t('store.checkout.steps')[0], t('store.checkout.steps')[1], t('store.checkout.steps')[2]];

  const nextStep = () => {
    setActiveStep(prev => prev === 0 ? 1 : prev === 1 ? 4 : 4)
  }

  return (
    <Stack
      gap='6rem'
      marginTop='8rem'
      width='95vw'
      maxWidth='50rem'
    >

      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 ?
        <MyItem
          item={items[item]}
          nextStep={nextStep}
        /> : activeStep === 1 ?
        <Payment /> :
        <Confimation />}

    </Stack>
  );
}

export default CheckoutContent;
