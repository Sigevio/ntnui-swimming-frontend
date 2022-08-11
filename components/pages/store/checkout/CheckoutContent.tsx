import { Stack, Step, StepLabel, Stepper } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { items } from '../items';
import Confimation from './components/confirmation/Confirmation';
import MyItem from './components/myItem/MyItem';
import Payment from './components/payment/Payment';
import { QontoConnector, QontoStepIcon } from './styled/CustomStepper';

const CheckoutContent = () => {
  useEffect(() => {
    setItemId(parseInt(Router.query.itemId as string, 10));
  }, []);

  const [activeStep, setActiveStep] = useState<number>(0);
  const [itemId, setItemId] = useState(-1);

  const { t } = useTranslation();

  const steps = [t('store.checkout.steps')[0], t('store.checkout.steps')[1], t('store.checkout.steps')[2]];

  const nextStep = () => {
    setActiveStep(prev => prev === 0 ? 1 : prev === 1 ? 4 : 4)
  }

  if (!(itemId in [0, 1, 2, 3, 4])) {
    return (
      <></>
    )
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
          item={items[itemId]}
          nextStep={nextStep}
        /> : activeStep === 1 ?
        <Payment
          nextStep={nextStep}
        /> :
        <Confimation />}

    </Stack>
  );
}

export default CheckoutContent;
