import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, styled } from '@mui/material';

const TheAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={1} square {...props} />
))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  maxWidth: '50rem',
  transition: 'max-width 0.3s ease',
  border: `2px solid ${theme.palette.primary.main}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));

const TheAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.primary,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    transition: 'transform 0.2s linear'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}));

const TheAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
}));

export {
  TheAccordion,
  TheAccordionSummary,
  TheAccordionDetails
}
