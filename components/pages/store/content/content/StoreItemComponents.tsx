import { ShoppingCartCheckout } from '@mui/icons-material';
import { ButtonBase, Grid, IconButton, styled, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { prefix } from '../../../../../utils/prefix';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

type ItemProps = {
  id: number,
  filetype: string,
  header: string[],       // norwegian and english
  description: string[],  // norwegian and enlglish
  price: number
}

type ItemPictureProps = {
  item: ItemProps,
  toggleDialog: () => void
}

type ItemDescriptionProps = {
  item: ItemProps
}

type ItemCheckoutProps = {
  item: ItemProps,
  handleCheckout: () => void
}

const ItemPicture = (props: ItemPictureProps) => {
  const { item, toggleDialog } = props;

  return (
    <Grid
      item
    >
      <ButtonBase
        sx={{
          width: 128,
          height: 128,
          cursor: 'zoom-in'
        }}
        onClick={toggleDialog}
      >
        <Img
          alt={item.header[1]}
          src={`${prefix}/store/${item.id}.${item.filetype}`}
        />
      </ButtonBase>
    </Grid>
  );
}

const ItemDescription = (props: ItemDescriptionProps) => {
  const { item } = props;

  const { t } = useTranslation();

  return (
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
          color='text.secondary'
        >
          {item.description[t('language') === 'no' ? 0 : 1]}
        </Typography>
      </Grid>
    </Grid>
  );
}

const ItemCheckout = (props: ItemCheckoutProps) => {
  const { item, handleCheckout } = props;

  const { t } = useTranslation();

  return (
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
      <Tooltip
        arrow
        disableInteractive
        title={
          <Typography>
            {t('store.buy')}
          </Typography>
        }
      >
        <IconButton
          edge='end'
          onClick={handleCheckout}
        >
          <ShoppingCartCheckout
            color='primary'
          />
        </IconButton>
      </Tooltip>
    </Grid>
  )
}

export {
  ItemPicture,
  ItemDescription,
  ItemCheckout
}

export type {
  ItemProps
}
