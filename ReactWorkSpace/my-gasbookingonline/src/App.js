import "./App.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/home";
import NavBar from "./components/nav";
import ContactUs from "./components/contactus";
import Login from "./components/login";
import Register from "./components/register";
import Cart from "./components/cart";
import PageNotFound from "./components/pagenotfound";
import  Surrendercylinder from "./components/surrendercylinder"
import Addsurrendercylinder from "./components/addsurrendercylinder";
import UpdateSurrenderCylinder from "./components/updatesurrendercylinder";

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/contactus' component={ContactUs} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/surrendercylinder/updateSurrenderCylinder/:surrenderId' component={UpdateSurrenderCylinder}/>
                <Route exact path='/surrendercylinder/insertSurrenderCylinder' component={Addsurrendercylinder}/>
                <Route exact path='/surrendercylinder' component={Surrendercylinder} />
                <Route exact path='/cart' component={Cart} />
                <Redirect exact path='/' to='/home'/>
                <Route component={PageNotFound}/>
            
            </Switch>
        </Router>
    );
}

export default App;