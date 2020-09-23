import React from 'react';
import Booths from './Booths';
import Menu from './Menu';
import Booth1 from './Booth1'; 
import Booth2 from './Booth2';
import Booth3 from './Booth3';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BoothWithExhibitor from './BoothWithExhibitor';

function TradeShowFloor() {
    return (
        <BrowserRouter>          
          <Menu/>    
        <Switch>
            <Route path='/' exact component={BoothWithExhibitor} />
            <Route path='/Booth1' exact component={Booth1} />
            <Route path='/Booth2' exact component={Booth2} />
            <Route path='/Booth3' exact component={Booth3} />
        </Switch>
        </BrowserRouter>
    )
}

export default TradeShowFloor;