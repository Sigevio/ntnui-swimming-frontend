import { Box, Card, CardContent, CardMedia, Divider, Fade, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { prefix } from '../../../../utils/prefix';

type BoardCardProps = {
  mobileQuery: boolean,
  marginQuery: boolean,
  member: any,
  darkMode: boolean,
  i: number
}

type BoardCardMediaProps = {
  mobileQuery: boolean,
  member: any
}

type BoardCardContentProps = {
  member: any,
  darkMode: boolean,
  i: number
}

const ImageWrapper = styled('div')({
  position: 'relative',
  height: '100%'
});

const BoardCard = (props: BoardCardProps) => {
  const { mobileQuery, marginQuery, member, darkMode, i } = props;

  return (
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
        direction={mobileQuery ? 'column' :
          i % 2 === 0 ? 'row' : 'row-reverse'}
      >
        <BoardCardMedia member={member} mobileQuery={mobileQuery} />
        <BoardCardContent member={member} darkMode={darkMode} i={i} />
      </Stack>
    </Card>
  );
}

const BoardCardMedia = (props: BoardCardMediaProps) => {
  const { mobileQuery, member } = props;

  const [showImage, setShowImage] = useState<boolean>(false);

  return (
    <CardMedia>
      <Fade
        appear={false}
        in={showImage}
        timeout={2000}
      >
        <ImageWrapper
          sx={{
            width: mobileQuery ? '100%' : '15rem',
            minHeight: mobileQuery ? '30rem' : '25rem'
          }}
        >
          <Image
            src={`${prefix}/board/${member[0]}.jpeg`}
            alt={member[0]}
            layout='fill'
            objectFit='cover'
            onLoadingComplete={() => setShowImage(true)}
          />
        </ImageWrapper>
      </Fade>
    </CardMedia>
  );
}

const BoardCardContent = (props: BoardCardContentProps) => {
  const { member, darkMode, i } = props;

  return (
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
            color={darkMode ? 'primary.light' : 'primary.dark'}
          >
            {member[1][0]}
          </Typography>
          <Divider
            sx={{
              color: 'text.primary'
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
  );
}

export default BoardCard;
