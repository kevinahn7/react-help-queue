import React from 'react';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
