import React from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

// import { Button } from 'react-bulma-components';
import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import { Content } from 'react-bulma-components';
import { Container } from 'react-bulma-components';
import { List } from 'react-bulma-components';
import { Box } from 'react-bulma-components';

function App() {

  function changeBackground(e) {
    e.target.style.background = ' #EFC6B5';
  }
  function changeBackgroundBack(e) {
    e.target.style.background = '';
  }


  return (
    <div className="Body">
      <Container className='Container'>
    <Columns>
      <Columns.Column size={2.5}>
      <Card className='Card'>
      
      <Card.Content>

        <p><b>Transporter 1</b></p>
        <hr></hr>
      
      <ul onMouseOver={changeBackground} onMouseOut={changeBackgroundBack} >
          <li className='li-item'>Dashboard</li>
          <li className='li-item'>My Business Info</li>
          <li className='li-item'>Drivers Manager</li>
          <li className='li-item'>Vehicles Manager</li>
          <li className='li-item'>Jobs Manager</li>
          <li className='li-item'>Calender</li>
          <li className='li-item'>Messages</li>
          <li className='li-item'>Payments</li>
      </ul>
    
      </Card.Content>
    </Card>
      </Columns.Column>
    
    <Columns.Column size={7}>
    <Card className='Card'>
      
      <Card.Content>
        
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
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

      <Columns.Column size={2.5}>
      <Card className='Card'>
      
      <Card.Content>

        <p><b>Drivers</b></p>
        <hr></hr>
      
      <ul onMouseOver={changeBackground} onMouseOut={changeBackgroundBack} >
          <li className='li-item'>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'>Carl<time className='time' >11:09 PM</time></li>
          <li className='li-item'>Carl<time className='time' >11:09 PM</time></li>
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

export default App;
