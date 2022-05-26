import { EmojiEvents } from '@mui/icons-material';
import { Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';
import { motion } from 'framer-motion';

const Meets = () => {
  const { locale } = useRouter();
  const translation = locale === 'en' ? en : locale === 'fr' ? fr : locale === 'de' ? de : no;

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      sx={{
        marginBottom: '2rem'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: mobileQuery ? 0.2 : 0.5,
          duration: 0.5
        }}
      >
        <Typography
          variant='h3'
          textAlign='center'
          marginBottom='0.5rem'
        >
          {translation.activities.meets[0]}
        </Typography>
        <Stack
          direction={mobileQuery ? 'column-reverse' : 'row'}
          alignItems='center'
          gap='1rem'
        >
          <EmojiEvents
            color='primary'
            sx={{
              height: '8rem',
              width: '8rem'
            }}
          />
          <Divider
            orientation={mobileQuery ? 'horizontal' : 'vertical'}
            sx={
              mobileQuery ?
              {
                width: '95vw'
              } :
              {
                height: '8rem'
              }
            }
          />
          <Typography
            color='text.secondary'
          >
            {translation.activities.meets[1]}
          </Typography>
        </Stack>
      </motion.div>
    </Container>
  );
}

export default Meets;
