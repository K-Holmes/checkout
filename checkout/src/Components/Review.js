import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Ripped Boyfriend Fit Flannel Jacket',
    desc: 'Size: LG',
    price: '$9.99',
  },
  {
    name: 'Unisex Graphic Tee',
    desc: 'Size: MD',
    price: '$3.45',
  },
  {
    name: 'Women\'s Suspender Skirt',
    desc: 'Size: 0',
    price: '$6.51',
    color: 'Red',
    quantity: '1',
  },
  {
    name: 'Poison Apple Mug',
    desc: 'Size: N/A',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card Type', detail: 'Visa' },
  { name: 'Card Holder', detail: 'Mr John Smith' },
  { name: 'Card Number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expir. Date', detail: '04/24' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Order Summary
      </Typography>
      <Typography variant="h6" gutterBottom>
        Shopping Bag (4 items)
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}