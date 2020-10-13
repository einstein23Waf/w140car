
import React from 'react';

import './Login.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Avatar from 'react-avatar';

import { Button } from 'react-bulma-components';
import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import { Content } from 'react-bulma-components';
import { Container } from 'react-bulma-components';
import { RiDashboardLine } from "react-icons/ri";
import { FaSistrix } from "react-icons/fa";
import { GiCamel} from "react-icons/gi";
import Sidemenu  from './Sidemenu';


function Dashboard () {


  function changeBackground(e) {
    e.target.style.background = ' #EFC6B5';
  }
    function changeBackgroundBack(e) {
    e.target.style.background = '';
  }

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
    
    <Columns.Column size={6}>
    <Card className='Card'>
      
      <Card.Content>
        
        <Content>
        <heading><b>Lead sales</b></heading>
          <hr></hr>
          {/* <a href="#1">#css</a> <a href="#2">#responsive</a> */}
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>
    <Columns className='Lower-column'>
    <Columns.Column size={6}>
    <Card className='Card'>
      
      <Card.Content>
        
        <Content>
          <heading><b>Activity</b></heading>
          <hr></hr>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          {/* <a href="#1">#css</a> <a href="#2">#responsive</a> */}
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>

    </Columns.Column>
    <Columns.Column size={6}>
    <Card className='Card'>
      
      <Card.Content>
        
        <Content>
        <heading><b>Notifications</b></heading>
          <hr></hr>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          {/* <a href="#1">#css</a> <a href="#2">#responsive</a> */}
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>

    </Columns.Column>
    </Columns>


      </Columns.Column>

      <Columns.Column size={3}>
      
      
      
      <Card className='Card'>
      
      <Card.Content>

        <p><b>Drivers</b></p>
        <hr></hr>
      
      <ul onMouseOver={changeBackground} onMouseOut={changeBackgroundBack} >
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'><Avatar size="40" round="35px" name="carl" className='Avatar'/>Carl<time className='time' >11:09 PM</time></li>
      </ul>
    
      </Card.Content>
    </Card>
      </Columns.Column>

      </Columns>
      </Container>
    {/* </div> */}
</div>
  

    
  );
}


export default Dashboard;
