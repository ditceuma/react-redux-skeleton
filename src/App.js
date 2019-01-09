import React from 'react';
import './App.css';
import {  Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Footer from './shared/components/layout/Footer'
import HeaderCustom from './shared/components/layout/Header';

const App =({children}) =>(
  <Container>
    <HeaderCustom />
      {children}
    <Footer />
  </Container>
);
export default App;
