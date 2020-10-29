
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
import { Form } from 'react-bulma-components';

import { Button } from 'react-bulma-components';
import { Link } from 'react-router-dom';



function Location () {


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
        <heading><b>Select Your Location</b></heading>
          <hr></hr>
          <Columns>
                <Columns.Column size={12} className="Map-div" >

                </Columns.Column>

          
                <Columns.Column size={6} className="Pick-up">
                    <Form.Field>
                        <Form.Control>
                            <Form.Label>Pick-Up Location</Form.Label>
                            <Form.Input name="name" value="Select pick-up location..." />
                        </Form.Control>
                    </Form.Field>
                </Columns.Column>
                <Columns.Column size={6} className="Destination">
                <Form.Field>
                        <Form.Control>
                            <Form.Label>Destination</Form.Label>
                            <Form.Input name="name" value="Drop-off location..." />
                        </Form.Control>
                    </Form.Field>
                </Columns.Column>
                <Columns.Column full className="loc-button">
                    <Button.Group>
                        <Link to="basicrequest"><Button fullwidth  color="primary">Next</Button></Link>
                    </Button.Group> 
                </Columns.Column>
          </Columns>



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


export default Location;
