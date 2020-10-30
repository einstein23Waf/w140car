
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


function Basicrequirements () {


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
    <Card className='Basic-Card'>
      
      <Card.Content>
        
        <Content>
        <heading><b>Basic Requirements </b></heading>
          <hr></hr>
                <div className="Basic-form">
                    <Form.Field>
                        <Form.Control>
                            <Form.Label>Payment Mode?</Form.Label>
                            <Form.Input name="name" value="Goods Value..." />
                        </Form.Control>
                    </Form.Field>
                     
                     

                    <Columns >
                     <Columns.Column size={6}>
                            <Form.Field>
                                <Form.Control>
                                    <Form.Label>Estimate Measure</Form.Label>
                                    <Form.Label>Numerical Unit</Form.Label>
                                    <Form.Input name="name" value="Goods Value..." />
                                </Form.Control>
                            </Form.Field>
                        </Columns.Column>

                        <Columns.Column size={6} className="measure-right">
                            <Form.Field>
                                <Form.Control>
                                    <Form.Label>Unit Measurement</Form.Label>
                                    <Form.Input name="name" value="Goods Value..." />
                                </Form.Control>
                            </Form.Field>
                        </Columns.Column>


                    </Columns>

                    <Form.Field>
                        <Form.Control>
                            <Form.Label>Requirements?</Form.Label>
                            <Form.Input name="name" value="Goods Value..." />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Control>
                            <Form.Label>Additional info?</Form.Label>
                            <Form.Input name="name" value="Goods Value..." />
                        </Form.Control>
                    </Form.Field>

                    <Columns >
                     <Columns.Column size={6}>
                            <Form.Field>
                                <Form.Control>
                                    <Form.Label>Select Start Date and Time</Form.Label>
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Input name="name" value="Goods Value..." />
                                </Form.Control>
                            </Form.Field>

                            <Button.Group>
                                <Link to="#"><Button fullwidth  color="primary">Next</Button></Link>
                            </Button.Group> 


                        </Columns.Column>

                        <Columns.Column size={6} className="measure-right">
                            <Form.Field>
                                <Form.Control>
                                    <Form.Label>Start Time</Form.Label>
                                    <Form.Input name="name" value="Goods Value..." />
                                </Form.Control>
                            </Form.Field>

                            
                            <Button.Group>
                                <Link to="#"><Button fullwidth  color="primary">Next</Button></Link>
                            </Button.Group> 

                        </Columns.Column>


                    </Columns>

                    <Form.Field>
                        <Form.Control>
                            <Form.Label>Payment Mode?</Form.Label>
                            <Form.Input name="name" value="Goods Value..." />
                        </Form.Control>
                    </Form.Field>

                    
                    <Form.Field>
                        <Form.Control>
                            <Form.Label>Service Priority Level?</Form.Label>
                            <Form.Radio type="radio" value="High..." /> High
                            <Form.Radio type="radio" value="Medium..." /> Medium
                            <Form.Radio type="radio" value="Low..." /> Low
                        </Form.Control>
                    </Form.Field>

                    <Button.Group>
                        <Link to="specificrequest"><Button fullwidth  color="primary">Next</Button></Link>
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


export default Basicrequirements;
