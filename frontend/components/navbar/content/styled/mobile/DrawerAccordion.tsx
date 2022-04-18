import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, styled } from '@mui/material';

const DrawerAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0',
  transition: 'max-width 0.3s ease',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  '&:before': {
    display: 'none'
  },
}));

const DrawerAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  flexDirection: 'row-reverse',
  padding: '0',
  backgroundColor: 'transparent',
  height: '3.5rem',
  '& .MuiAccordionSummary-content.Mui-expanded': {
    transition: 'opacity 0.25s ease',
    opacity: '0.25'
  }
}));

const DrawerAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: '0',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderBottom: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor: theme.palette.background.paper
}));

export {
  DrawerAccordion,
  DrawerAccordionSummary,
  DrawerAccordionDetails
}
