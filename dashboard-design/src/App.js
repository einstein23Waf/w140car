import React from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

// import { Button } from 'react-bulma-components';
import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import { Content } from 'react-bulma-components';

function App() {
  return (
    <div className="Body">
    <Columns>
      <Columns.Column size={3.5}>
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
    
    <Columns.Column size={5}>
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

      <Columns.Column size={3.5}>
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
    {/* </div> */}
</div>
  

    
  );
}

export default App;
