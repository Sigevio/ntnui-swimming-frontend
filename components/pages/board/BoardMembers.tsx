import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'next-export-i18n';
import BoardCard from './content/CardComponents';

const BoardMembers = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('sm'));
  const marginQuery = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Stack
      gap='2rem'
      minHeight='100vh'
    >
      {Object.entries(t('board')).slice(1).map((member: any, i) => (
        <Fade
          key={member[0]}
          duration={1000}
          triggerOnce
          direction={i % 2 === 0 ? 'left' : 'right'}
          fraction={0.5}
        >
          <BoardCard
            mobileQuery={mobileQuery}
            marginQuery={marginQuery}
            member={member}
            darkMode={theme.palette.mode === 'dark'}
            i={i}
          />
        </Fade>))}
    </Stack>
  );
}

export default BoardMembers;
