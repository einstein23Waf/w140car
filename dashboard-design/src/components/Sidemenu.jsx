import 'react-bulma-components/dist/react-bulma-components.min.css';
import React from "react";
import './Login.css';
import { Button } from 'react-bulma-components';
import { RiDashboardLine } from "react-icons/ri";
import { Card } from 'react-bulma-components';
import { Link } from 'react-router-dom';


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
            <li className='li-item'><Link to="/dashboard"><RiDashboardLine className="icon"/>Dashboard</Link></li>
            <li className='li-item'><Link to="/userprofile"><RiDashboardLine className="icon"/>My Profile</Link></li>
            <li className='li-item'><Link to="/myservicehistory"><RiDashboardLine className="icon"/>My Service History</Link></li>
            <li className='li-item'><Link to="/calendar"><RiDashboardLine className="icon"/>Calender</Link></li>
            <li className='li-item'><Link to="/messages"><RiDashboardLine className="icon"/>Messages</Link></li>
            <li className='li-item'><Link to="/payments"><RiDashboardLine className="icon"/>Payments</Link></li>
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