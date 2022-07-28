import { ArrowForwardIosSharp, Looks3, LooksOne, LooksTwo } from '@mui/icons-material';
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Slide, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { useState } from 'react';
import { TheAccordion, TheAccordionDetails, TheAccordionSummary } from './styled/TheAccordion';

const FAQs = () => {
  const [accordionExpanded, setAccordionExpanded] = useState<string | false>('false');

  const { t } = useTranslation();

  const handleChangeAccordion = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setAccordionExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>

      <Stack
        alignItems='center'
      >
        <TheAccordion
          elevation={5}
          key='panel1'
          expanded={accordionExpanded === 'panel1'}
          onChange={handleChangeAccordion('panel1')}
          sx={accordionExpanded === 'panel1' ? {maxWidth: '60rem'} : undefined}
        >
          <TheAccordionSummary
            aria-controls='panel1-content'
            id='panel1-header'
            expandIcon={
              <ArrowForwardIosSharp
                sx={{
                  fontSize: '0.9rem',
                  transition: 'color 0.2s linear',
                  color: accordionExpanded === 'panel1' ? 'background.default' : 'text.primary'
                }}
              />
            }
            sx={{
              transition: 'color 0.2s linear',
              color: accordionExpanded === 'panel1' ? 'background.default' : 'text.primary',
              backgroundColor: accordionExpanded === 'panel1' ? 'primary.main' : null,
              fontWeight: accordionExpanded === 'panel1' ? 'bold' : null
            }}
          >
            {t('faq.faq1')[0]}
          </TheAccordionSummary>
          <TheAccordionDetails>
            <List>
              {t('faq.faq1').slice(1).map((faq: string, i: number) => (<>
                <Slide
                  key={i}
                  appear={false}
                  in={accordionExpanded === 'panel1'}
                  timeout={(i+1)*200+150}
                  direction='right'
                >
                  <ListItem>
                    <ListItemIcon>
                      {i === 0 ?
                      <LooksOne
                        sx={{
                          color: 'background.default'
                        }}
                      /> :
                      i === 1 ?
                      <LooksTwo
                        sx={{
                          color: 'background.default'
                        }}
                      /> :
                      i === 2 ?
                      <Looks3
                        sx={{
                          color: 'background.default'
                        }}
                      /> :
                      null}
                    </ListItemIcon>
                    <ListItemText
                      primary={faq}
                      sx={{
                        color: 'background.default'
                      }}
                    />
                  </ListItem>
                </Slide>
              </>))}
            </List>
          </TheAccordionDetails>
        </TheAccordion>

        {Object.values(t('faq')).slice(2, -1).map((faq: any, i) => (
          <TheAccordion
            elevation={5}
            key={`panel${i+2}`}
            expanded={accordionExpanded === `panel${i+2}`}
            onChange={handleChangeAccordion(`panel${i+2}`)}
            sx={accordionExpanded === `panel${i+2}` ? {maxWidth: '60rem'} : undefined}
          >
            <TheAccordionSummary
              aria-controls={`panel${i+2}-content`}
              id={`panel${i+2}-header`}
              expandIcon={
                <ArrowForwardIosSharp
                  sx={{
                    fontSize: '0.9rem',
                    transition: 'color 0.2s linear',
                    color: accordionExpanded === `panel${i+2}` ? 'background.default' : 'text.primary'
                  }}
                />
              }
              sx={{
                transition: 'color 0.2s linear',
                color: accordionExpanded === `panel${i+2}` ? 'background.default' : 'text.primary',
                backgroundColor: accordionExpanded === `panel${i+2}` ? 'primary.main' : null,
                fontWeight: accordionExpanded === `panel${i+2}` ? 'bold' : null
              }}
            >
              {faq[0]}
            </TheAccordionSummary>
              <TheAccordionDetails>
                <Box
                  minHeight='7.5rem'
                >
                  <Slide
                    appear={false}
                    in={accordionExpanded === `panel${i+2}`}
                    timeout={350}
                    direction='right'
                  >
                    <Typography
                      sx={{
                        color: 'background.default'
                      }}
                    >
                      {faq[1]}
                    </Typography>
                  </Slide>
                </Box>
              </TheAccordionDetails>
          </TheAccordion>))}
      </Stack>

      <Container
        sx={{
          marginTop: '2rem'
        }}
      >
        <Typography
          textAlign='center'
        >
          {t('faq.footer')}
        </Typography>
      </Container>

    </Box>
  );
}

export default FAQs;
