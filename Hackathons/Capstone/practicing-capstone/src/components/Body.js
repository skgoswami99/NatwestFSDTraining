import * as React from 'react';
import Sidebar from './Sidebar'
import { Alert, Box, ButtonBase, Card, Grid, Button, Modal, Typography  } from '@mui/material'
import './Body.css';
import testimony1 from './images/Tmony1.JPG';
import testimony2 from './images/Tmony2.JPG';
import testimony3 from './images/Tmony3.JPG';
import forex from './images/exchange.png';
import wallet from './images/wallet.png';
import movie from './images/cinema.png';
import food from './images/food.png';
import reward from './images/medal.png';
import offer from './images/offers.png'
import recharge from './images/flash.png'
import util from './images/utilities.png'
import tax from './images/bag.png'
import trfr from './images/money-transfer.png'
import banner1 from './images/mvbanner1.jpg'
import { CurrencyRupeeSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Body() {
  const navigate = useNavigate();
  const [balance, setBalance] = React.useState();
  const [login, setLogin] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleModelOpen = () => setOpen(true);
  const handleModelClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#39a0ca',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  React.useEffect(() => {

    const isAuthenticated = localStorage.getItem('token');

    if (isAuthenticated === null) {
        setLogin(false)
    }
    else {
        setLogin(true)
    }

})

  React.useEffect(() => {
    fetch(`http://localhost:8182/auth/balance/${localStorage.getItem('email')}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(res => res.json())

      .then(data => {
        // console.log(data);
        setBalance(data);

      })


  }, [])

  return (

    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(196, 230, 250)', }}>
      
      {(login) ?
        <Card sx={{ bgcolor: '#0f2862', color: 'white', borderRadius: 2, mt: 2, mx: 2, p: 1, pl: 3, width: '22rem', height: '3rem' }}>
          <h3> Wallet Balance : <CurrencyRupeeSharp fontSize='large' />{balance}</h3>
        </Card>
        :
        null}
      </Box>
      <Modal
                open={open}
                onClose={handleModelClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Please Login to use this Service
                    </Typography>
                  
                  <br></br>
                  <Button href="/login" sx={{ bgcolor: '#0f2862', p: 0 }}>
                    <Typography sx={{ color: 'white', p: 1, border: '1px solid' }}>
                      Login
                    </Typography>
                  </Button>
                </Box>
              </Modal>

      <Box sx={{ display: 'flex', backgroundColor: 'rgb(196, 230, 250)' }} >

        <Sidebar />

        <Grid className='gridIcons'>
          <Box >

            <div className="icongroup">

              <div className="aboutBox">

                <Card sx={{ mx: 3, mb: 2, p: 1, px: 2, borderRadius: 5 }}>
                  <ButtonBase sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderRadius: 5 }} onClick={() => {(login) ? navigate("/addmoney"): handleModelOpen()}} >
                    <img className="iconimg" src={wallet} alt="download" />
                    <p className="iconDesc">Add Money</p>
                  </ButtonBase>
                </Card>


                <Card sx={{ mx: 3, mb: 2, p: 1, px: 2, borderRadius: 5 }}>
                  <ButtonBase sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderRadius: 5
                  }} onClick={() => {(login) ? navigate("/converter"): handleModelOpen()}}>
                    <img className="iconimg" src={forex} alt="download" />
                    <p className="iconDesc">ForEx</p>
                  </ButtonBase>
                </Card>

                <Card sx={{ mx: 3, mb: 2, p: 1, px: 2, borderRadius: 5 }}>
                  <ButtonBase sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderRadius: 5
                  }} onClick={() => {(login) ? navigate("/movie"): handleModelOpen()}} >
                    <img className="iconimg" src={movie} alt="download" />
                    <p className="iconDesc">Book Movies</p>
                  </ButtonBase>
                </Card>

                <Card sx={{ mx: 3, mb: 2, p: 1, px: 2, borderRadius: 5 }}>
                  <ButtonBase sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderRadius: 5
                  }} onClick={() => {(login) ? navigate("/food"): handleModelOpen()}} >
                    <img className="iconimg" src={food} alt="download" />
                    <p className="iconDesc">Order Food</p>
                  </ButtonBase>
                </Card>

                <Card sx={{ mx: 3, mb: 2, p: 1, px: 2, borderRadius: 5 }}>
                  <ButtonBase onClick={() => navigate("/rewards")} sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderRadius: 5
                  }}>
                    <img className="iconimg" src={reward} alt="download" />
                    <p className="iconDesc">Rewards</p>
                  </ButtonBase>
                </Card>

              </div>
            </div>
          </Box>


          <Box >
            <div className="icongroup">
              <div className="aboutBox">

                <Card sx={{ mx: 3, mb: 2, p: 1, px: 2, borderRadius: 5 }}>
                  <ButtonBase onClick={() => {alert("This Service is currently under development!")}} sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderRadius: 5
                  }}>
                    <img className="iconimg" src={offer} alt="download" />
                    <p className="iconDesc">Offers</p>
                  </ButtonBase>
                </Card>

                <Card sx={{ mx: 3, mb: 2, p: 1, px: 2, borderRadius: 5 }}>
                  <ButtonBase sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderRadius: 5
                  }} onClick={() => {(login) ? navigate("/topup"): handleModelOpen()}} >
                    <img className="iconimg" src={recharge} alt="download" />
                    <p className="iconDesc">Mobile TopUp</p>
                  </ButtonBase>
                </Card>

                <Card sx={{ mx: 3, mb: 2, p: 1, px: 2, borderRadius: 5 }}>
                  <ButtonBase sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderRadius: 5
                  }} onClick={() => {(login) ? navigate("/transfer"): handleModelOpen()}} >
                    <img className="iconimg" src={trfr} alt="download" />
                    <p className="iconDesc">Transfers</p>
                  </ButtonBase>
                </Card>



                <Card sx={{ mx: 3, mb: 2, p: 1, px: 2, borderRadius: 5 }}>
                  <ButtonBase  onClick={() => {alert("This Service is currently under development!")}} sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderRadius: 5
                  }} >
                    <img className="iconimg" src={util} alt="download" />
                    <p className="iconDesc">Utility</p>
                  </ButtonBase>
                </Card>

                <Card sx={{ mx: 3, mb: 2, p: 1, px: 2, borderRadius: 5 }}>
                  <ButtonBase onClick={() => {alert("This Service is currently under development!")}} sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderRadius: 5
                  }}>
                    <img className="iconimg" src={tax} alt="download" />
                    <p className="iconDesc">Taxes</p>
                  </ButtonBase>
                </Card>



              </div>
            </div>
          </Box>
        </Grid>
      </Box>


      <Box >
        <div className="testimony">
          <div className="aboutContent">
            <p className="big">
              What our Users are <span className="bigBlue">Saying.</span>
            </p>
            <p className="descBox">
              Our users are the one who promotes us as we don't spend in advertisements, let's hear what they say !
            </p>
            <div className="aboutBox">
              <div className="aboutCard">
                <img className="testimg" src={testimony1} alt="profile" />
                <p className="titleDesc">Shelby Stern</p>
                <p>
                  “I have been using the Go-Pay Wallet for quite long now and I can say this is the best app that I’ve ever used in my entire life”
                </p>
              </div>
              <div className="aboutCard">
                <img className="testimg" src={testimony2} alt="profile" />
                <p className="titleDesc">Chris Mark</p>
                <p>
                  “I use Go-Pay wallet for all my needs and to make my payment in a splash. It’s super easy to use and it’s 100% free app”
                </p>
              </div>
              <div className="aboutCard">
                <img className="testimg" src={testimony3} alt="profile" />
                <p className="titleDesc">Britney Shepherd</p>
                <p>
                  “One of the fastest way to pay for things, such a great overll experience of payments. Thank you Go-Pay!”
                </p>
              </div>
            </div>
          </div>
        </div>
      </Box></>

  )
}
export default Body;