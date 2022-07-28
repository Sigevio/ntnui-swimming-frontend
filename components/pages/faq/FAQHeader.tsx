import { Container, Divider, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { Fade } from 'react-awesome-reveal';


const FAQHeader = () => {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        marginTop: '8rem'
      }}
    >
      <Stack
        gap='1rem'
        alignItems='center'
      >
        <Fade
          duration={1000}
          cascade
          triggerOnce
          direction='up'
        >
          <Typography
            variant='h2'
            fontWeight='bold'
            color='primary'
          >
            {t('faq.header')}
          </Typography>
          <Divider
            sx={{
              width: '95vw',
              maxWidth: '50rem'
            }}
          />
        </Fade>
      </Stack>
    </Container>
  );
}

export default FAQHeader;