import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';

const countries = [
  {
    value: 'US',
    label: 'United States',
  },
  {
    value: 'CA',
    label: 'Canada',
  },
  {
    value: 'MX',
    label: 'Mexico',
  },
  {
    value: 'JP',
    label: 'Japan',
  },
];

const states = [
  {
    value: 'NA',
    label: 'OUTSIDE US',
  },
  {
    value: 'AL',
    label: 'Alabama',
  },
  {
    value: 'AK',
    label: 'Alaska',
  },
  {
    value: 'AZ',
    label: 'Arizona',
  },
  {
    value: 'AR',
    label: 'Arkansas',
  },
  {
    value: 'CA',
    label: 'California',
  },
  {
    value: 'CO',
    label: 'Colorado',
  },
  {
    value: 'CT',
    label: 'Conneticut',
  },
  {
    value: 'DE',
    label: 'Delaware',
  },
  {
    value: 'FL',
    label: 'Florida',
  },
  {
    value: 'GA',
    label: 'Georgia',
  },
  {
    value: 'HI',
    label: 'Hawaii',
  },
  {
    value: 'ID',
    label: 'Idaho',
  },
  {
    value: 'IL',
    label: 'Illinois',
  },
  {
    value: 'IN',
    label: 'Indiana',
  },
  {
    value: 'IA',
    label: 'Iowa',
  },
  {
    value: 'KS',
    label: 'Kansas',
  },
  {
    value: 'KY',
    label: 'Kentucky',
  },
  {
    value: 'LA',
    label: 'Louisiana',
  },
  {
    value: 'ME',
    label: 'Maine',
  },
  {
    value: 'MD',
    label: 'Maryland',
  },
  {
    value: 'MA',
    label: 'Massachusetts',
  },
  {
    value: 'MI',
    label: 'Michigan',
  },
  {
    value: 'MN',
    label: 'Minnesota',
  },
  {
    value: 'MS',
    label: 'Mississippi',
  },
  {
    value: 'MO',
    label: 'Missouri',
  },
  {
    value: 'MT',
    label: 'Montana',
  },
  {
    value: 'NE',
    label: 'Nebraska',
  },
  {
    value: 'NV',
    label: 'Nevada',
  },
  {
    value: 'NH',
    label: 'New Hampshire',
  },
  {
    value: 'NJ',
    label: 'New Jersey',
  },
  {
    value: 'NM',
    label: 'New Mexico',
  },
  {
    value: 'NY',
    label: 'New York',
  },
  {
    value: 'NC',
    label: 'North Carolina',
  },
  {
    value: 'ND',
    label: 'North Dakota',
  },
  {
    value: 'OH',
    label: 'Ohio',
  },
  {
    value: 'OK',
    label: 'Oklahoma',
  },
  {
    value: 'OR',
    label: 'Oregon',
  },
  {
    value: 'PA',
    label: 'Pennsylvania',
  },
  {
    value: 'RI',
    label: 'Rhode Island',
  },
  {
    value: 'SC',
    label: 'South Carolina',
  },
  {
    value: 'SD',
    label: 'South Dakota',
  },
  {
    value: 'TN',
    label: 'Tennessee',
  },
  {
    value: 'TX',
    label: 'Texas',
  },
  {
    value: 'UT',
    label: 'Utah',
  },
  {
    value: 'VT',
    label: 'Vermont',
  },
  {
    value: 'VA',
    label: 'Virginia',
  },
  {
    value: 'WA',
    label: 'Washington',
  },
  {
    value: 'WV',
    label: 'West Virginia',
  },
  {
    value: 'WI',
    label: 'Wisconsin',
  },
  {
    value: 'WY',
    label: 'Wyoming',
  },
];

export default function AddressForm() {
  const [country, setCountry] = React.useState('US');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const [state, setState] = React.useState('NA');

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            color="warning" focused
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs = {12} sm = {6}>
        <TextField
          id="outlined-select-country"
          select
          required
          label="Country"
          value={country}
          onChange={handleChange}
          fullWidth
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs = {12} sm = {6}>
        <TextField
          id="outlined-select-state"
          select
          required
          label="State"
          value={state}
          onChange={handleChanges}
          fullWidth
        >
          {states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="ZIP Code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="default" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}