import { Close } from '@mui/icons-material';
import { Card, Dialog, DialogActions, DialogContent, Fade, Grid, IconButton, styled, Tooltip, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import { prefix } from '../../../../utils/prefix';
import { ItemCheckout, ItemDescription, ItemPicture, ItemProps } from './content/StoreItemComponents';

type StoreItemProps = {
  item: ItemProps,
  handleCheckout: () => void
}

const DialogImageWrapper = styled('div')({
  position: 'relative',
  minWidth: 'min(30rem, 70vw)'
})

const StoreItem = (props: StoreItemProps) => {
  const { item, handleCheckout } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState(16/9);
  
  const toggleDialog = () => {
    setDialogOpen(prev => prev === true ? false : true);
  }

  return (
    <>

      <Card
        key={item.id}
        elevation={3}
        sx={{
          padding: '0.5rem'
        }}
      >
        <Grid
          container
          spacing={2}
        >
          <ItemPicture
            item={item}
            toggleDialog={toggleDialog}
          />
          <Grid
            item
            xs={12}
            sm
            container
          >
            <ItemDescription
              item={item}
            />
            <ItemCheckout
              item={item}
              handleCheckout={handleCheckout}
            />
          </Grid>
        </Grid>
      </Card>

      <Dialog
        open={dialogOpen}
        onClose={toggleDialog}
      >

          <DialogActions>
            <IconButton
              onClick={toggleDialog}
            >
              <Close />
            </IconButton>
          </DialogActions>

          <DialogContent>
          <DialogImageWrapper
            sx={{
              minHeight: `calc(min(30rem, 80vw) / ${aspectRatio})`
            }}
          >
            <Image
              src={`${prefix}/store/${item.id}.${item.filetype}`}
              alt={item.header[1]}
              layout='fill'
              objectFit='contain'
              onLoadingComplete={({ naturalWidth, naturalHeight }) => 
                setAspectRatio(naturalWidth / naturalHeight)}
            />
          </DialogImageWrapper>
          </DialogContent>

      </Dialog>

    </>
  );
}

export default StoreItem;
