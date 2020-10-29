
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

import { Button } from 'react-bulma-components';
import { Form } from 'react-bulma-components';

import {Dropdown} from 'react-bulma-components';
import { Link } from 'react-router-dom';



function Requests () {


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
        <heading><b>New Service Request</b></heading>
          <hr></hr>


          <div className="form-div">
                   <Form.Field>
                        <Form.Control>
                            <Form.Label>Select Service Category</Form.Label>
                            <Form.Input name="name" value="select service category..." />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Control>
                            <Form.Label>Service Item</Form.Label>
                            <Form.Input name="name" value="select service item..." />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Control>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Input name="name" value="enter number..." />
                        </Form.Control>
                    </Form.Field>

                    <Dropdown >
                        <Dropdown.Item  >
                          Dropdown item
                        </Dropdown.Item>
                        <Dropdown.Item >
                          Other Dropdown item
                        </Dropdown.Item>
                        <Dropdown.Item >
                          Active Dropdown item
                        </Dropdown.Item>
                        <Dropdown.Item >
                          Other Dropdown item
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item >
                          With divider
                        </Dropdown.Item>
                    </Dropdown>

                   

                    <Button.Group>
                        <Link to="location"><Button fullwidth  color="primary">Next</Button></Link>
                    </Button.Group> 
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


export default Requests;
