import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import logo from './logo.svg';
import './App.css';
import SignUp from './signup';


import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import WizardForm from "./WizardForm";
import Values from './values';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          CS 375 - Spring 2023 - Sample UI Application
        </Typography>
        <ProTip />

        <h2>Wizard Example</h2>
        <Provider store={store}>
          <WizardForm onSubmit={showResults} />
          <Values form="wizard" />
        </Provider>

      </Box>
    </Container>
  );
}


