import { Card, CardContent, CardMedia, Divider, Fade, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';

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
    >
      {Object.entries(translation.board).slice(1).map((member, i) => (
      <Fade
        key={i}
        appear={false}
        in={showCards}
        timeout={1000}
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
              image={`/board/${member[0]}.jpg`}
              alt={`${member[0]}`}
              sx={{
                width: '15rem'
              }}
            /> :
            null}
            <CardContent>
              <Stack
                gap='0.5rem'
              >
                <Typography
                  variant='h4'
                  textAlign='center'
                  color='primary'
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
                  {member[1][1]}
                </Typography>
              </Stack>
            </CardContent>
            {i % 2 !== 0 || mobileQuery ?
            <CardMedia
              component='img'
              image={`/board/${member[0]}.jpg`}
              alt={`${member[0]}`}
              sx={{
                width: mobileQuery ? '100%' : '15rem'
              }}
            /> :
            null}
          </Stack>
        </Card>
      </Fade>))}
    </Stack>
  );
}

export default BoardMembers;