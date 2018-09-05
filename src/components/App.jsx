import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
      <TicketList/>
    </div>
  );
}

export default App;
