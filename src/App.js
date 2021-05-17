import React from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer'
import LandingPage from '../src/pages/home/LandingPage'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme'
import Collections from './pages/collection'
import Detail from './pages/detail'
import Services from '../src/pages/ServicesPage/Services';
import CustomSoftware from '../src/pages/ServicesPage/Customsoftware/CustomSoftware'
import MobileApps from '../src/pages/ServicesPage/MobileApps/MobileApps'
import Websites from '../src/pages/ServicesPage/Websites/Websites'
import Revolution from '../src/pages/Revolution/Revolution'
import About from '../src/pages/AboutUs/About'
import Contact from '../src/pages/Contact/Contact'
import Estimate from '../src/pages/Estimate/Estimate'




export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() =><LandingPage/>} />
          <Route exact path="/services" component={() => <Services/>} />
          <Route exact path="/collection" component={() => <Collections />} />
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/mobileapps" component={() => <MobileApps/>} />
          <Route exact path="/websites" component={() => <Websites/>} />
          <Route exact path="/customsoftware" component={() =><CustomSoftware/>} />
          <Route exact path="/revolutions" component={() => <Revolution/>} />
          <Route exact path="/about" component={() => <About/>} />
          <Route exact path="/contact" component={() => <Contact/>} />
          <Route exact path="/estimate" component={() => <Estimate/>} />
          <Route exact path="*" component={() => <div>404 Error</div>} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

