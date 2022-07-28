import { AddShoppingCart, RemoveShoppingCart, ShoppingCartCheckout } from '@mui/icons-material';
import { ButtonBase, Card, CardContent, Dialog, DialogContent, Grid, IconButton, Slide, Stack, styled, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import Image from 'next/image';
import { useState } from 'react';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CheckoutBox = styled(Card)(({ theme }) => ({
  position: 'fixed',
  top: 'auto',
  bottom: '1rem',
  height: '5rem',
  width: '98vw',
  maxWidth: '20rem',
  borderRadius: '1rem',
  backgroundColor: theme.palette.primary.main,
  zIndex: '10'
}));

const items = [
  {
    id: 1,
    header: [
      'NTNUI Svømmming genser',
      'NTNUI Svømming Sweater'
    ],
    description: [
      'Skriv størrelse i kommentarfeltet',
      'Write size in comments'
    ],
    price: 510
  },
  {
    id: 2,
    header: [
      'NTNUI Svømming genser med glidelås',
      'NTNUI Svømming Sweater with ZIP'
    ],
    description: [
      'Skriv størrelse/kjønn i kommentarfeltet',
      'Write size/gender in comments'
    ],
    price: 550
  },
  {
    id: 3,
    header: [
      '75-årsjubileum',
      '75 Years Jubilee'
    ],
    description: [
      'Vi ønsker venner, gamle og nåværende medlemmer velkommen til å bli med å feire NTNUI Svømming sine 75 år! Skriv eventuelle allergier eller preferanser i kommentarfeltet ved påmelding. Prisen inkluderer mat og dalje. Arrangementet ligger tilgjengelig på Facebook.',
      'We wish friends, old and current members welcome to celebrate NTNUI Svømming turning 75 years! Write eventual allergies or preferences in comments. The price includes food and dalje. You can find the event on Facebook.'
    ],
    price: 650
  },
  {
    id: 4,
    header: [
      'Svenskebriller',
      'Swedish Goggles'
    ],
    description: [
      'Tilgjengelige farger: white/orange/green/red. Skriv i kommentarfeltet hvilken farge du vil ha.',
      'Available colors: white/orange/green/red. Write color in comments.'
    ],
    price: 30
  },
  {
    id: 5,
    header: [
      'NTNUI-badehette',
      'NTNUI Swimcap'
    ],
    description: [
      'Den offisielle NTNUI-svømming badehetten, kommer i gul farge.',
      'The official NTNUI swimcap. It is yellow.'
    ],
    price: 110
  }
]

interface ShoppingCartState {
  id: number;
  header: Array<string>;
  description: Array<string>;
  price: number;
}

interface ImageState {
  open: boolean;
  src: string;
}

const StoreItems = () => {
  const { t } = useTranslation();

  const [shoppingCart, setShoppingCart] = useState<Array<ShoppingCartState>>([]);
  const [imageState, setImageState] = useState<ImageState>({
    open: false,
    src: ''
  })

  const handleChangeCart = (item: ShoppingCartState) => {
    if (shoppingCart.includes(item)) {
      setShoppingCart(shoppingCart.filter(i => i !== item))
    }
    else {
      setShoppingCart([
        ...shoppingCart,
        item
      ]);
    }
  }

  const handleCheckout = () => {

  }

  const handleOpenImage = (source: string) => {
    setImageState({
      open: true,
      src: '/' + source
    });
  }

  const handleCloseImage = () => {
    setImageState({
      ...imageState,
      open: false
    });
  }

  return (
    <Stack>
      <Stack
        width='95vw'
        maxWidth='50rem'
        gap='2rem'
      >
        {items.map((item, i) => (
          <Card
            key={i}
            elevation={3}
            sx={{
              padding: '0.5rem'
            }}
          >
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
              >
                <ButtonBase
                  sx={{
                    width: 128,
                    height: 128
                  }}
                  onClick={() => handleOpenImage(JSON.stringify(item.id))}
                >
                  <Img
                    alt='item'
                    src=''
                  />
                </ButtonBase>
              </Grid>
              <Grid
                item
                xs={12}
                sm
                container
              >
                <Grid
                  item
                  xs
                  container
                  direction='column'
                  spacing={2}
                >
                  <Grid
                    item
                    xs
                    paddingRight='1rem'
                  >
                    <Typography
                      gutterBottom
                      variant='subtitle1'
                      component='div'
                    >
                      {item.header[t('language') === 'no' ? 0 : 1]}
                    </Typography>
                    <Typography
                      variant='body2'
                      gutterBottom
                    >
                      {item.description[t('language') === 'no' ? 0 : 1]}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  justifyContent='space-between'
                  alignItems='center'
                  display='flex'
                  flexDirection='column'
                >
                  <Typography
                    variant='subtitle1'
                    component='div'
                  >
                    NOK {item.price}
                  </Typography>
                  {!shoppingCart.includes(item) ?
                    <Tooltip
                      arrow
                      disableInteractive
                      title={
                        <Typography>
                          {t('store.modifyCart')[0]}
                        </Typography>
                      }
                    >
                      <IconButton
                        edge='end'
                        onClick={() => handleChangeCart(item)}
                      >
                        <AddShoppingCart
                          color='primary'
                        />
                      </IconButton>
                    </Tooltip> :
                    <Tooltip
                    arrow
                    disableInteractive
                    title={
                      <Typography>
                        {t('store.modifyCart')[1]}
                      </Typography>
                    }
                    >
                      <IconButton
                        edge='end'
                        onClick={() => handleChangeCart(item)}
                      >
                        <RemoveShoppingCart
                          color='warning'
                        />
                      </IconButton>
                    </Tooltip>}
                </Grid>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Stack>

      <Dialog
        open={imageState.open}
        onClose={handleCloseImage}
      >
        <DialogContent>
          <Image
            src={imageState.src}
            alt={imageState.src}
            layout='fill'
          />
        </DialogContent>
      </Dialog>

      <Stack
        direction='row'
        justifyContent='center'
      >
        <Slide
          appear={false}
          in={shoppingCart.length !== 0}
          direction='up'
        >
          <CheckoutBox
            elevation={3}
          >
            <CardContent
              sx={{
                paddingInline: '2rem'
              }}
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Stack>
                  <Typography
                    color='text.secondary'
                  >
                    {shoppingCart.length} {shoppingCart.length === 1 ? 
                    t('store.items')[0] :
                    t('store.items')[1]} á
                  </Typography>
                  <Typography
                    color='text.primary'
                    fontWeight='bold'
                  >
                    {shoppingCart.length !== 0 && shoppingCart.map(item => item.price).reduce((a, b) => a + b, 0)} NOK
                  </Typography>
                </Stack>
                <Tooltip
                  arrow
                  disableInteractive
                  title={
                    <Typography>
                      {t('store.checkout')}
                    </Typography>
                  }
                >
                  <IconButton>
                    <ShoppingCartCheckout />
                  </IconButton>
                </Tooltip>
              </Stack>
            </CardContent>
          </CheckoutBox>
        </Slide>
      </Stack>
    </Stack>
  );
}

export default StoreItems;
