
import React from 'react';

import './Login.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import { Content } from 'react-bulma-components';
import { Container } from 'react-bulma-components';
import { FaSistrix } from "react-icons/fa";
import { GiCamel} from "react-icons/gi";
import Sidemenu  from './Sidemenu'
import { Link } from 'react-router-dom';



function Newservices () {


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
        <heading><b>Create New Service Request</b></heading>
          <hr></hr>


          <div className='Request-div'>

          <div className='request-divs'>
      
                <div className='Request-card'>
               
                  
                </div>
                <Link to="requests"><p>Transportation</p></Link>
          </div>

          

          <div className='request-divs'>

                <div className='Request-card'>

                  
                </div>
                <p>Special Services</p>
          </div>
          

          <div className='request-divs'>

                <div className='Request-card'>

                  
                </div>
                <p>Emergency</p>
          </div>

          

          </div>

         







          
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


export default Newservices;
