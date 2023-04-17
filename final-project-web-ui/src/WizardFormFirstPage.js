import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>

        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Field
                    name="firstName"
                    type="text"
                    component={renderField}
                    label="First Name"
                />
                <Field
                    name="lastName"
                    type="text"
                    component={renderField}
                    label="Last Name"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Field
                    name="emailAddress"
                    type="text"
                    component={renderField}
                    label="Email Address"
                />
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={12}>        
            </Grid>

        </Grid>

      <div>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)