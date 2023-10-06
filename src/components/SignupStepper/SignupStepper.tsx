import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepOneForm from '../StepOneForm/StepOneForm';
import StepThreeForm from '../StepThreeForm/StepThreeForm';
import StepTwoForm from '../StepTwoForm/StepTwoForm';

const steps = [
  { title: "Your details", desc: "Provide your basic information" },
  { title: "Confirmation", desc: "Confirm your email" },
  { title: "Store information", desc: "Set your store main info" }
]
const StepperIcon = ({ color = '#F2F4F7' }: { color: string }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="12" fill={color} />
    <circle cx="12" cy="12" r="4" fill="white" />
  </svg>
}
export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
            completed?: boolean;
          } =
            {};

          if (activeStep  == index) {
            labelProps.completed = true;
          } else {
            labelProps.completed = false;
          }

          return (
            <Step key={label.title} {...stepProps}>
              <StepLabel {...labelProps} StepIconComponent={labelProps.completed ? () => StepperIcon({ color: '#7244C8' }) : StepperIcon}>
                <span className='text-primary text-center text-sm font-semibold leading-tight'>
                  {label.title}
                </span>
                <br />
                <span className='text-center text-slate-700 text-xs font-normal leading-tight'>{label.desc}</span>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
         {activeStep == 0 &&  <StepOneForm  next={handleNext}/>}
         {activeStep == 1 &&  <StepTwoForm  next={handleNext} back={handleBack}/>}
         {activeStep == 2 &&  <StepThreeForm next={handleNext} back={handleBack}/>}
          {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box> */}
        </React.Fragment>
      )}
    </Box>
  );
}