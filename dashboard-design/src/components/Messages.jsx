
import React from 'react';

import './Login.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import Avatar from 'react-avatar';
import { Content } from 'react-bulma-components';
import { Container } from 'react-bulma-components';
import { FaSistrix } from "react-icons/fa";
import { GiCamel} from "react-icons/gi";
import Sidemenu  from './Sidemenu';


function Messages () {


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
    
    <Columns.Column size={3}>
    <Card className='contacts-card'>
      
      <Card.Content>
        
        <Content>
        <heading><FaSistrix className='search1' size='30px'/>Find contacts</heading>
          <hr></hr>
          <ul>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
         </ul>
          
        </Content>
      </Card.Content>
    </Card>
    </Columns.Column>
    <Columns.Column size={6}>
    <Card className='messages-card'>
      
      <Card.Content>
        
        <Content>
        <heading><b>Messages</b></heading>
          <hr></hr>
          
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


export default Messages;
