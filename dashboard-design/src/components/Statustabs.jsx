
import React from 'react';

import './Login.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import { Columns } from 'react-bulma-components';






function Statustabs () {


  return (
    


  
    <div className='Service-container'>
       <div className='status-p'>
          <h5>Status:</h5>
       </div>

                  
                        
                 
         <div className='Status-buttons' >
            
                     <Button.Group>
                              <Columns >
                              
                                 <Columns.Column size={3}>
                                    <Button color="info">New</Button>
                                 </Columns.Column>
                                 <Columns.Column size={3}>
                                    <Button color="warning">In progress</Button>
                                 </Columns.Column>
                                 <Columns.Column size={3}>
                                    <Button color="danger">Cancelled</Button>
                                 </Columns.Column>
                                 <Columns.Column size={3}>
                                    <Button color="primary">Completed</Button>
                                 </Columns.Column>
                              </Columns>
                        </Button.Group>
         </div>

    </div>
  

    
  );
}


export default Statustabs;
