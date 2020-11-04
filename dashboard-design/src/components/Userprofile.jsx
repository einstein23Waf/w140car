import 'react-bulma-components/dist/react-bulma-components.min.css';
import React from "react";

import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import { Content } from 'react-bulma-components';
import { Container } from 'react-bulma-components';
import { FaSistrix } from "react-icons/fa";
import { GiCamel} from "react-icons/gi";
import Sidemenu  from './Sidemenu';
import Avatar from 'react-avatar';

function Userprofile () {

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
        <heading><b>My Profile</b></heading>
          <hr></hr>

          <div className='cover-div'>
            <p>Upload Cover</p>

          </div>

          <div className='user-info-div'>
             <Avatar size="80" square="60px" name="carl" className='user-avatar'/>Carl Bond

             <div>
                <label> Email:</label><p className='email'>carlb1319@gmail.com</p>
                <hr className='h-line'></hr>

             </div>

             <div>

                <label> Phone:</label><p className='phone'>0704-965-601</p>
                <hr className='h-line'></hr>

             </div>

             <div>
               <heading> Social Accounts</heading>
             </div>

             
            

            

          </div>
          
        </Content>
      </Card.Content>
    </Card>
    </Columns.Column>

     

      </Columns>
      </Container>
        </div>
        

    );
}

export default Userprofile;