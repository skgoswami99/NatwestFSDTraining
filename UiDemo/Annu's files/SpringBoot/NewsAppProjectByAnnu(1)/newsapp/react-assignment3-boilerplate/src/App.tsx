import React, { useState } from 'react';
import Header from './Components/header/Header';
import Dashboard from './Components/dashboad/Dashboard';
import NewsDashboard from './Components/news/NewsDashboard';
import NewsSourceDashboard from './Components/newssource/NewsSourceDashboard';
import Footer from './Components/footer/Footer';
import Grid from '@material-ui/core/Grid';
import Login from './Components/login/Login';
import ReadNow from './Components/readNow/ReadNow';
import DisplayUserProfile from './Components/user/DisplayUserProfile';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'

function App() {
  const [token, setToken] = useState('');
  const [page, setPage] = useState('dashboard');
  const [url, setUrl] = useState('https://newsapi.org/v2/top-headlines?country=in&apikey=1fc0a77bf2bd494db21842f0a66d75bb');
  const [pageNumber, setPageNumber] = useState(20);

  const updateToken = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token)

  }

  const updatePage = (page: string) => {
    setPage(page);
    console.log("page .... ", page);

  }

  const updateUrl = (url: string) => {
    setUrl(url);
    console.log("url .... ", url);

  }

  const updatePageNumber = (pageNumber: number) => {
    setPageNumber(pageNumber);
    console.log("pageNumber .... ", pageNumber);

  }

  return (
    <div>
      <Grid container direction="column">
        <Header token={token} updatePage={updatePage} updateUrl={updateUrl} updatePageNumber={updatePageNumber}></Header>

        <Router>
          <Route exact path='/' component={() => (token) ? <Redirect to='/dashboard'></Redirect> : <Login updateToken={updateToken} />} />

          <Route exact path='/dashboard'
            component={() =>
                (page == 'news') ? <Redirect to='/news'></Redirect> :
                  (page == 'readnow') ? <Redirect to='/readnow'>
                  </Redirect> : (page == 'newssource') ? <Redirect to='/newssource'></Redirect> :
                  (page == 'userprofile') ? <Redirect to='/userprofile'></Redirect>:
                (token) ? <Dashboard url={url} pageNumber={pageNumber}>
                </Dashboard> : <Redirect to='/' />} />

          <Route exact path='/readnow'
            component={() =>
              
                (page == 'news') ? <Redirect to='/news'></Redirect> :
                  (page == 'dashboard') ? <Redirect to='/dashboard'></Redirect> : 
                  (page == 'newssource') ?
                  <Redirect to='/newssource'></Redirect> :
                (token) ? <ReadNow></ReadNow> : <Redirect to='/' />} />

          <Route exact path='/news'
            component={() =>
              
                (page == 'dashboard') ? <Redirect to='/dashboard'></Redirect> :
                  (page == 'readnow') ? <Redirect to='/readnow'></Redirect> :
                  (page =='newssource') ? <Redirect to='/newssource'></Redirect> :
                (token) ? <NewsDashboard url={url} pageNumber={pageNumber}></NewsDashboard> : <Redirect to='/' />} />

          <Route exact path='/newssource'
            component={() => 
                (page == 'dashboard') ? <Redirect to='/dashboard'></Redirect> :
                  (page == 'readnow') ? <Redirect to='/readnow'></Redirect> : 
                  (page =='news') ? <Redirect to='/news'></Redirect> :
                (token) ? <NewsSourceDashboard url={url} pageNumber={pageNumber}></NewsSourceDashboard> : <Redirect to='/' />} />


          <Route exact path='/readnow' component={() => (page == 'dashboard') ? <Redirect to='/dashboard'></Redirect> : (token) ? <ReadNow /> : <Redirect to='/' />} />

          <Route exact path='/userprofile' component={() => (page == 'dashboard') ? 
          <Redirect to='/dashboard'></Redirect> : (token) ? <DisplayUserProfile /> : <Redirect to='/' />} />

        </Router>

        {/*// Way 1
         <Router>
          <Route exact path = '/' component = {Login} />
          <Route exact path = '/dashboard' component = {Dashboard} />
        </Router> */}
        {/* <Dashboard></Dashboard> */}
        <Footer></Footer>
      </Grid>

    </div>
  );
}

export default App;
