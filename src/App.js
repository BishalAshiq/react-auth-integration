import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header  from './Components/Header/Header';
import Home  from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Shipping from './Components/Shipping/Shipping';
import PrivetRoute from './Components/PrivetRoute.js/PrivetRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
         <Home></Home>  
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
           <Register></Register>
        </Route>
        <PrivetRoute path="/shipping">
            <Shipping></Shipping>
        </PrivetRoute>
        <PrivetRoute path="/placeorder">
          <PlaceOrder></PlaceOrder>
        </PrivetRoute>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
