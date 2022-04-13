import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
      url: 'fridayBeer',
      displayNO: 'Fredagspils',
      displayEN: 'Friday beer'
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
  const { locale } = useRouter();

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
              href={`/admin/${href.url}`}
              passHref
            >
              <ListItem
                button
              >
                <ListItemText
                  primary={
                    <Typography>
                      {locale === 'no' ? href.displayNO : href.displayEN}
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
                  {locale === 'no' ? 'Medlemmer' : 'Members'}
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          {hrefs.members.map((href, index) => (
            <Link
              key={index}
              href={`/admin/${href.url}`}
              passHref
            >
              <ListItem
                button
              >
                <ListItemText
                  primary={
                    <Typography>
                      {locale === 'no' ? href.displayNO : href.displayEN}
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