import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export default function SimpleAccordion() {
  return (
    <Box >
      <Accordion sx={{backgroundColor: '#0f2862', textAlign:'center', borderStyle:'solid', borderColor:'#39a0ca' }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white', }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color: "white",  }}><h5    > Call Us </h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "white"}}>
           <h6><strong>Gopay Premium Service</strong> 1800 270 1818 </h6> 
           <h6><strong>Complaints</strong> 1800 270 1919 </h6> 
           <h6><strong>Insurance</strong> 1800 270 2020 </h6> 
           <h6><strong>Investing</strong> 1800 270 2121 </h6> 
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#0f2862', textAlign:'center', borderStyle:'solid', borderColor:'#39a0ca'  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color: "white",}}><h5> Email Us </h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "white"}}>
         <h6><strong> Gopay wallet Service </strong>- GoPayWallet.com</h6>
<h6><strong> Complaints </strong> - Customercare@GoPayWallet.com</h6>
<h6><strong> Insurance</strong> - insurance@GoPayWallet.com</h6>
<h6><strong> Investing</strong>- Investing@GoPayWallet.com</h6>

          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion sx={{backgroundColor: 'rgb(196, 230, 250)' }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography style={{color: "#42145F"}}><h5> Chat with us</h5></Typography>
        </AccordionSummary>
        <Typography style={{color: "#42145F"}}>
          <h5><strong> Chat service</strong> - Our Chat Sevice will contact you shortly.</h5>
          </Typography>
      </Accordion> */}
    </Box>
  );
}
