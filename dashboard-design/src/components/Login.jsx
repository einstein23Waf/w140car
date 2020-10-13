import 'react-bulma-components/dist/react-bulma-components.min.css';
import React from "react";
import './Login.css';
import { Button } from 'react-bulma-components';
import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import { Form } from 'react-bulma-components';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im"

function Login () {

    return (
        
            <div className="Body">

            <div className="login-div">
                <Card className ="login-card">
                
                    <h1 className="login-header"> Login </h1>
                    <br/>

                    <div className="form-div">
                    <Form.Field>
                        <Form.Control>
                          <Form.Label>Name</Form.Label>
                          <Form.Input name="name" value="name" />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Control>
                            <Form.Label>Password</Form.Label>
                            <Form.Input name="password" type="password" value="password"/>
                        </Form.Control>
                    </Form.Field>

                    <Button.Group>
                        <Button fullwidth  color="primary">Login</Button>
                    </Button.Group> 
                    <hr></hr>
                    <h1 className="login-header"> OR </h1>
                    <h1 className="login-header"> Login with</h1>

                    <div className="Other-login-buttons">
                        <Button.Group>
                            <Columns>
                                <Columns.Column size={6}>
                                   <Button color="primary"><FcGoogle className="Button-icons" size='20px'/>Google</Button>
                                </Columns.Column>
                                <Columns.Column size={6}>
                                   <Button color="primary"><ImFacebook2  className="Facebook-icon" size='20px'/>Facebook</Button>
                                </Columns.Column>
                                <Columns.Column size={6}>
                                   <Button color="primary">LinkedIn</Button>
                                </Columns.Column>
                                <Columns.Column size={6}>
                                   <Button color="primary">Apple</Button>
                                </Columns.Column>
                            </Columns>
                            
                        
                        </Button.Group>
                    </div>

                    <div className="lower-header">
                        <p>You don't have an account? Click here to register.</p>
                    </div>

                    

                    </div>
                   

                    
                </Card>
            </div>

            


        </div>
        

    );
}

export default Login;