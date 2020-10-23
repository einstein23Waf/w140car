
import React from 'react';

import './Login.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import { Columns } from 'react-bulma-components';






function Statustabs () {


  return (
    


  
    <div className='Container'>
       <div className='status-p'>
          <p>Carl</p>
       </div>

                  
                        
                 
         <div className='Status-buttons' >
            
                     <Button.Group>
                              <Columns >
                              
                                 <Columns.Column size={3}>
                                    <Button color="primary">Carl</Button>
                                 </Columns.Column>
                                 <Columns.Column size={3}>
                                    <Button color="primary">Carl</Button>
                                 </Columns.Column>
                                 <Columns.Column size={3}>
                                    <Button color="primary">Carl</Button>
                                 </Columns.Column>
                                 <Columns.Column size={3}>
                                    <Button color="primary">Carl</Button>
                                 </Columns.Column>
                              </Columns>
                        </Button.Group>
         </div>

    </div>
  

    
  );
}


export default Statustabs;
