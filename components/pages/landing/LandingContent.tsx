import { Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-export-i18n';

const LandingContent = () => {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '120vh'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.5
        }}
      >
        <Stack
          gap='0.5rem'
        >
          <Typography
            variant='h2'
            color='text.primary'
          >
            {t('home.whoHeader')}
          </Typography>
          <Typography
            color='text.secondary'
          >
            {t('home.whoDescription')[0]}
          </Typography>
          <Typography
            color='text.secondary'
          >
            {t('home.whoDescription')[1]}
          </Typography>
        </Stack>
      </motion.div>
    </Container>
  );
}

export default LandingContent;
