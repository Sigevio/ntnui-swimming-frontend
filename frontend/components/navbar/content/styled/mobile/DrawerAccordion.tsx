import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, styled } from '@mui/material';

const DrawerAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '3.5rem',
  padding: '0',
  transition: 'max-width 0.3s ease',
  boxShadow: 'none',
  '&:before': {
    display: 'none'
  }
}));

const DrawerAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  flexDirection: 'row-reverse',
  padding: '0',
  '& .MuiAccordionSummary-content.Mui-expanded': {
    opacity: '0.25'
  }
}));

const DrawerAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: '0',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderBottom: '1px solid rgba(0, 0, 0, .125)'
}));

export {
  DrawerAccordion,
  DrawerAccordionSummary,
  DrawerAccordionDetails
}
