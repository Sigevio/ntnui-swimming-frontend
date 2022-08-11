import { Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import { ItemProps } from '../../../content/content/StoreItemComponents';

type MyItemProps = {
  item: ItemProps,
  nextStep: () => void
}

const MyItem = (props: MyItemProps) => {
  const { item, nextStep } = props;

  return (
    <Card>
      <CardHeader
        title={item.header[0]}
      />
      <CardContent>
        <Typography
          color='text.secondary'
        >
          {item.description[0]}
        </Typography>
        <Typography>

        </Typography>
        <TextField />
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          onClick={nextStep}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
}

export default MyItem;
