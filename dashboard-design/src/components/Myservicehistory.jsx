
import React from 'react';
import './Login.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import { Content } from 'react-bulma-components';
import { Container } from 'react-bulma-components';
import { FaSistrix } from "react-icons/fa";
import { GiCamel} from "react-icons/gi";
import Sidemenu  from './Sidemenu';
import Statustabs  from './Statustabs';


function Mysevicehistory () {


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
        <heading><b>Service History</b></heading>

       

          <hr></hr>
          {/* <a href="#1">#css</a> <a href="#2">#responsive</a> */}
          <br />
          <div>
             <Statustabs/>
          </div>

          
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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


export default Mysevicehistory;
