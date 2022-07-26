import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import shirt from './tshirt.jpeg';
import mug from './mug.jpeg';
import cloak from './cloak.jpeg';
import skirt from './skirt.jpeg';

const products = [
  {
    name: 'Black Brocade Mens Coat',
    desc: 'Color: BLACK, Size: 2XL , Qty: 1',
    price: '$80.90',
    logo: cloak,
  },
  {
    name: 'Tasty Peach Tofusagi Boyfriend Fit Girls T-Shirt',
    desc: 'Color: BLACK, Size: MD , Qty: 1',
    price: '$24.90',
    logo: shirt,
  },
  {
    name: 'Black Suspender Circle Skirt',
    desc: 'Color: Black, Size: 0 , Qty: 1',
    price: '$29.90',
    logo: skirt,
  },
  {
    name: 'Poison Apple Mug',
    desc: 'Qty: 1',
    price: '$16.90',
    logo: mug,
  },
  // { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card Type', detail: 'Visa' },
  { name: 'Card Holder', detail: 'Mr John Smith' },
  { name: 'Card Number', detail: '0000-0000-0000-0000' },
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
            <Grid>
              <img className="imgPadding"src={product.logo} alt ='' width="75" height="75"/>
            </Grid>
            <ListItemText primary={product.name} secondary={product.desc}/>
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Subtotal" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $132.28
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Shipping" />
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $0.00
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Shipping Surcharge" />
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $1.99
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Tax" />
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $0.00
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $134.27
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText secondary="Final shipping costs & tax will be calculated at checkout." />
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