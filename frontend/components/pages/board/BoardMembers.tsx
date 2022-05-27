import { Box, Card, CardContent, CardMedia, Divider, Fade, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';
import { motion } from 'framer-motion';

const BoardMembers = () => {
  const [showCards, setShowCards] = useState(false);

  const { locale } = useRouter();
  const translation = locale === 'en' ? en : locale === 'fr' ? fr : locale === 'de' ? de : no;

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('sm'));
  const marginQuery = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    setShowCards(true);
  }, []);

  return (
    <Stack
      gap='2rem'
      minHeight='100vh'
    >
      {showCards ? <>
      {Object.entries(translation.board).slice(1).map((member, i) => (
      <motion.div
        key={member[0]}
        initial={{
          opacity: 0,
          translateX: mobileQuery ? 0 : i % 2 === 0 ? '2rem' : '-2rem'
        }}
        whileInView={{
          opacity: 1,
          translateX: 0
        }}
        viewport={{ once: true }}
        transition={{
          delay: mobileQuery ? 0.2 : i === 0 || i === 1 ? 0.5 : 0.2,
          duration: 0.5
        }}
      >
        <Card
          elevation={3}
          sx={{
            width: '95vw',
            maxWidth: '50rem',
            marginRight: !marginQuery && i % 2 === 0 ? '6rem': '0',
            marginLeft: !marginQuery && i % 2 !== 0 ? '6rem': '0'
          }}
        >
          <Stack
            direction={mobileQuery ? 'column' : 'row'}
          >
            {i % 2 === 0 && !mobileQuery ?
            <CardMedia
              component='img'
              image={`/board/${member[0]}.jpeg`}
              alt={`${member[0]}`}
              sx={{
                width: '15rem'
              }}
            /> :
            null}
            <CardContent>
              <Stack
                height='100%'
                gap='3rem'
                justifyContent='space-between'
              >
              <Stack
                gap='0.5rem'
              >
                <Typography
                  variant='h4'
                  textAlign='center'
                  color={theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark'}
                >
                  {member[1][0]}
                </Typography>
                <Divider
                  sx={{
                    color: theme.palette.text.primary
                  }}
                />
                <Typography
                  color='text.secondary'
                >
                  {member[1][3]}
                </Typography>
              </Stack>
                <Box
                  color='primary.main'
                >
                  <Typography
                    fontWeight='bold'
                    textAlign={i % 2 === 0 ? 'right' : 'left'}
                  >
                    {member[1][1]}
                  </Typography>
                  <Typography
                    textAlign={i % 2 === 0 ? 'right' : 'left'}
                  >
                    {member[1][2]}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
            {i % 2 !== 0 || mobileQuery ?
            <CardMedia
              component='img'
              image={`/board/${member[0]}.jpeg`}
              alt={`${member[0]}`}
              sx={{
                width: mobileQuery ? '100%' : '15rem'
              }}
            /> :
            null}
          </Stack>
        </Card>
      </motion.div>))} </> :
      null}
    </Stack>
  );
}

export default BoardMembers;