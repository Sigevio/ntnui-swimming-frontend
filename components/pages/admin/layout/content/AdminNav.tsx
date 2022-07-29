import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useLanguageQuery, useTranslation } from 'next-export-i18n';
import Link from 'next/link';

const hrefs = {
  web: [
    {
      url: 'editUsers',
      displayNO: 'Rediger brukere',
      displayEN: 'Edit users'
    },
    {
      url: 'accessControl',
      displayNO: 'Tilgangskontroll',
      displayEN: 'Access Control'
    },
    {
      url: 'translations',
      displayNO: 'Oversettinger',
      displayEN: 'Translations'
    },
    {
      url: 'store',
      displayNO: 'Nettbutikk',
      displayEN: 'Store'
    },
    {
      url: 'testRange',
      displayNO: 'Test range',
      displayEN: 'Test range'
    },
  ],
  members: [
    {
      url: 'membershipRequests',
      displayNO: 'Medlemsforespørsler',
      displayEN: 'Membership requests'
    },
    {
      url: 'freeWorkForce',
      displayNO: 'Dugnad',
      displayEN: 'Free work force'
    },
    {
      url: 'cinRegistration',
      displayNO: 'KID-registrering',
      displayEN: 'CIN registration'
    },
    {
      url: 'memberSearch',
      displayNO: 'Medlemssøk',
      displayEN: 'Member search'
    }
  ]
}

const AdminNav = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '15rem',
        minHeight: '100vh',
        paddingTop: '3.5rem'
      }}
    >
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%'
        }}
        component='nav'
        aria-label='mailbox folders'
      >
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  variant='h5'
                  fontWeight='bold'
                >
                  Web
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          {hrefs.web.map((href, index) => (
            <Link
              key={`web${index}`}
              href={{ pathname: `/admin/${href.url}`, query: query }}
              passHref
            >
              <ListItem
                button
              >
                <ListItemText
                  primary={
                    <Typography>
                      {t('language') === 'no' ? href.displayNO : href.displayEN}
                    </Typography>
                  }
                  sx={{
                    paddingLeft: '1rem'
                  }}
                />
              </ListItem>
            </Link>
          ))}
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  variant='h5'
                  fontWeight='bold'
                >
                  {t('language') === 'no' ? 'Medlemmer' : 'Members'}
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          {hrefs.members.map((href, index) => (
            <Link
              key={`members${index}`}
              href={{ pathname: `/admin/${href.url}`, query: query }}
              passHref
            >
              <ListItem
                button
              >
                <ListItemText
                  primary={
                    <Typography>
                      {t('language') === 'no' ? href.displayNO : href.displayEN}
                    </Typography>
                  }
                  sx={{
                    paddingLeft: '1rem'
                  }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default AdminNav;