
import React from 'react';

import './Login.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import { Button } from 'react-bulma-components';
import { Content } from 'react-bulma-components';
import { Container } from 'react-bulma-components';
import { FaSistrix } from "react-icons/fa";
import { GiCamel} from "react-icons/gi";
import paypal from './images/paypal.png';
import mastercard from './images/mastercard.jpg';
import amazon from './images/amazon.webp';
import apple from './images/apple.png';
import Sidemenu  from './Sidemenu';


function Payments () {



  return (
    


  
    <div className="Body">
      <Container className='Container'>
    <Columns className='columns'>
    <Columns.Column size={12}>
      <Columns>
      <Columns.Column size={6} className='div1'>
         <GiCamel className='camel' size='40px'/>
      </Columns.Column>
      <Columns.Column size={6} className='div2'>
      
         
          <FaSistrix className='search' size='30px'/>
          <FaSistrix className='search' size='30px'/>
          <FaSistrix className='search' size='30px'/>
      
      </Columns.Column>
      </Columns>
      
    </Columns.Column>
      <Columns.Column size={3}>
      
        <Sidemenu/>
      
      </Columns.Column>
    
    <Columns.Column size={9}>
    <Card className='Service-Card'>
      
      <Card.Content>
        
        <Content>
        <heading><b>Payments History</b></heading>
          <hr></hr>

          <div className="payments-card-div">
            <Columns >
              <Columns.Column size={12}>
                 <h5>Make payment</h5>
                 <a><p><u>Show more payment options </u></p></a>
              </Columns.Column>
              <Columns.Column size={12}>
                <Columns>
                    <Columns.Column size={3}>
                       <img src={paypal} alt="Paypal" />
                    </Columns.Column>
                    <Columns.Column size={3}>
                       <img src={mastercard} alt="Mastercard" />
                    </Columns.Column>
                    <Columns.Column size={3}>
                       <img src={amazon} alt="Amazon" />
                    </Columns.Column>
                    <Columns.Column size={3}>
                        <img src={apple} alt="Apple" />
                    </Columns.Column>
                </Columns>
              </Columns.Column>
            </Columns>
          </div>
          <div className="lower-payments-div ">
              <ul>
                  <li>Status</li>
                  <li>Amount</li>
                  <li>Date</li>
                  <li>Description</li>
              </ul>
          </div>
          <ul className="lower-payments-div1 ">
              <li>Canceled</li>
              <li>$35000</li>
              <li>15 Oct 2020</li>
              <li>payment via mastercard</li>
              <li><Button color="primary" size="small" rounded outlined>Details</Button></li>
          </ul>
        </Content>
      </Card.Content>
    </Card>
    </Columns.Column>

     

      </Columns>
      </Container>
    {/* </div> */}
</div>
  

    
  );
}


export default Payments;
