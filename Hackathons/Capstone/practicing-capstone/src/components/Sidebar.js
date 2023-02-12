import * as React from 'react';
import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ElectricBoltSharp, StarsOutlined, AccountBalanceOutlined, CurrencyExchangeOutlined, AccountBalanceWalletOutlined, LocalDiningOutlined } from '@mui/icons-material';
import { Drawer, Paper } from '@mui/material';


const drawerWidth = 225;


export default function Sidebar() {

  const [login, setLogin] = React.useState(false);
  React.useEffect(() => {

    const isAuthenticated = localStorage.getItem('token');

    if (isAuthenticated === null) {
        setLogin(false)
    }
    else {
        setLogin(true)
    }

})
  return (
    
    <Box sx={{ display: { xs: "none", sm: "block", md: "block",} }}>
        
      <CssBaseline />
      
      <Drawer 
        variant="permanent"
        
        sx={{
          
           flexShrink: 0,
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
          height: 310,  pl:1, mt:10, boxSizing: 'border-box', bgcolor: '#0f2862', color: 'white', }, 
        }}
      >
        {(login)?
        <Box sx={{pt:1, overflow:'clip' }}>
          <List >
            
              
                <ListItemButton href="/addmoney" sx={{mb:0, ":hover":{ backgroundColor: '#39a0ca', color: 'white',transform: 'scale(1.07)'   }}}>
                    <AccountBalanceWalletOutlined color='info' />
                  <ListItemText sx={{px:3}} primary='Add to Wallet'/>
                </ListItemButton>

                <ListItemButton href='/topup' sx={{mb:0, ":hover":{ backgroundColor: '#39a0ca', color: 'white',transform: 'scale(1.07)'
                }}}>
                    <ElectricBoltSharp color='warning'/>
                  <ListItemText sx={{px:3}} primary='Recharges' />
                </ListItemButton>

                <ListItemButton href="/food" sx={{mb:0, ":hover":{ backgroundColor: '#39a0ca', color: 'white',transform: 'scale(1.07)'
                }}}>
                 <LocalDiningOutlined color='string'/>
                  <ListItemText sx={{px:3}} primary='Order Food'/>
                </ListItemButton>
              
                <ListItemButton href="/rewards" sx={{mb:0, ":hover":{ backgroundColor: '#39a0ca', color: 'white',transform: 'scale(1.07)'
                }}}>
                    <StarsOutlined color='info'/>
                  <ListItemText sx={{px:3}} primary='My Rewards' />
                </ListItemButton>

                <ListItemButton  href="/converter" sx={{mb:0, ":hover":{ backgroundColor: '#39a0ca', color: 'white',transform: 'scale(1.07)'
                }}}>
                    <CurrencyExchangeOutlined color='warning'/>
                  <ListItemText sx={{px:3}} primary='Order Forex' />
                </ListItemButton>

                <ListItemButton href="/movie"  sx={{mb:0, ":hover":{ backgroundColor: '#39a0ca', color: 'white',transform: 'scale(1.07)'
                }}}>
                    <i class="fas fa-video fs-5"></i>
                  <ListItemText sx={{px:3}} primary='Book Movies' />
                </ListItemButton>
            
          </List>
        </Box>
         : null}  
      </Drawer>
     
         </Box>
        
  )
}