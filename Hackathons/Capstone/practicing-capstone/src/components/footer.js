import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from './images/Logo.png';
import zIndex from '@mui/material/styles/zIndex';

export default function Foot() {
  return (
    <MDBFooter className='text-center text-lg-start text-white' id='bg' style={{ backgroundColor: "#0f2862", zIndex:'1'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-1 border-bottom'>
        <div className='me-5 d-none d-lg-block p-2'>
            <span>Get connected with us on social networks:</span>
            </div>

        <div>
          <a href='' className='me-4 fs-4 text-reset '>
            <MDBIcon color='secondary' fab icon='facebook-f text-white' />
          </a>
          <a href='' className='me-4 fs-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter text-info' />
          </a>
          <a href='' className='me-4 fs-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google text-warning' />
          </a>
          <a href='' className='me-4 fs-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram text-danger' />
          </a>
          <a href='' className='me-4 fs-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin text-info' />
          </a>
          <a href='' className='me-4 fs-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github text-white' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-2'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='text-white mx-auto mb-4'>
               <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='info' icon='wallet' className='me-3 fs-2' />
                GO-PAY WALLET
              </h6>
             <p>
               Pay On the Go
            </p>
            <p>
               Earn Rewards
            </p>
            <img class="logo"  src={logo}></img>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-1'>
               <h6 className='text-uppercase fw-bold mb-4'>Other Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Book Movie Tickets
             </a>
               </p>
               <p>
                <a href='#!' className='text-reset'>
                  Money Exchange
                </a>
              </p>
              <p>
               <a href='#!' className='text-reset'>
                  Bus & Train Tickets
                 </a>
              </p>
               <p>
                <a href='#!' className='text-reset'>
                   Shopping & Food
                </a>
               </p>
            </MDBCol>

             <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-1'>
               <h6 className='text-uppercase fw-bold mb-4'>Check These Out</h6>
              <p>
                <a href='#!' className='text-reset'>
                   Investing
                 </a>
               </p>
              <p>
                <a href='#!' className='text-reset'>
                   Payments & Transfers
                 </a>
               </p>
               <p>
                 <a href='#!' className='text-reset'>
                   Add money to Wallet
                 </a>
               </p>
               <p>
                 <a href='#!' className='text-reset'>
                   Check Credit Score
                 </a>
               </p>
             </MDBCol>

             <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-1'>
               <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
               <p>
                 <MDBIcon color='info' icon='home' className='me-3' />
                  
                 New Delhi, NCR -110011
               </p>
               <p>
                 <MDBIcon color='info' icon='envelope' className='me-3' />
                 GoPayWallet.com
               </p>
               <p>
                 <MDBIcon color='info' icon='phone' className='me-3' /> + 91 234 567 88
               </p>
               <p>
                 <MDBIcon color='info' icon='print' className='me-3' /> + 91 234 567 89
               </p>
             </MDBCol>
          </MDBRow>
         </MDBContainer>
       </section>

       <div className='text-center text-dark p-1' style={{ backgroundColor: '#39a0ca' }}>
         © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://gopay.com.my/'>
         GoPayWallet.com
         </a>
       </div>
    </MDBFooter>
  );
} 