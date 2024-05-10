import React from 'react';
import Layout1 from './mobileLayout';
import Layout from './layout';
import { BrowserView, MobileView } from 'react-device-detect';

function App() {
 
    return (
      <>
      <BrowserView>
      <Layout/>
     </BrowserView>
     <MobileView>
      <Layout1/>
     </MobileView>
     </>
    )
  };


export default App;

