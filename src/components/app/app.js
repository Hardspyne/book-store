import React from 'react';
import './app.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import {BookPage, CartPage, HomePage} from '../pages';
import Header from "../header";

const App = () => {
    return (
        <main role={'main'} className={'container'}>
            <Header/>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/cart' component={CartPage}/>
                <Route path='/books/:id' component={BookPage}/>
                <Redirect to='/'/>
            </Switch>
        </main>
    )
};

export default App;