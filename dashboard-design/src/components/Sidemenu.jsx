import 'react-bulma-components/dist/react-bulma-components.min.css';
import React from "react";
import './Login.css';
import { Button } from 'react-bulma-components';
import { RiDashboardLine } from "react-icons/ri";
import { Card } from 'react-bulma-components';


function Sidemenu () {

  function changeBackground(e) {
    e.target.style.background = ' #EFC6B5';
  }
    function changeBackgroundBack(e) {
    e.target.style.background = '';
  }

    return (
        <>
        <Card className='Card'>
      
        <Card.Content>
  
          <p><b>Customer 1</b></p>
          <hr></hr>
        
        <ul onMouseOver={changeBackground} onMouseOut={changeBackgroundBack} >
            <li className='li-item'><RiDashboardLine className="icon"/>Dashboard</li>
            <li className='li-item'><RiDashboardLine className="icon"/>User Profile</li>
            <li className='li-item'><RiDashboardLine className="icon"/>Messages</li>
            <li className='li-item'><RiDashboardLine className="icon"/>Payments</li>
            <li className='li-item'><RiDashboardLine className="icon"/>Payments</li>
            <li className='li-item'><RiDashboardLine className="icon"/>Payments</li>
            <li className='li-item'><RiDashboardLine className="icon"/>Payments</li>
            <li className='li-item'><RiDashboardLine className="icon"/>Payments</li>
        </ul>
  
        <div className='line'>
        <hr></hr>
        </div>
        
        <Button color="primary" size="small" rounded outlined>Logout</Button>
      
        </Card.Content>
      </Card>
      </>

    );
}

export default Sidemenu;