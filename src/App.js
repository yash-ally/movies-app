import React from 'react'; //imr

import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap 


import Panel from './component/adminPanel'
import Footer from './component/Footer';


import Topbar from './component/Topbar'

import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Cart from './component/Cart'
import PDP from './component/PDP'
import Product_Details from './component/Product_Details'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import OrderPlaced from './component/orderPlaced'
import Movies from './component/Movies'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {  //sfc
  const path = process.env.PUBLIC_URL
  return ( 
    
    <div>

      {/* <Products/> */}
      <BrowserRouter>
      <Topbar />
        <Switch>
            <Route path={`${path}/`} exact component={Home} />
            <Route path={`${path}/about`} component={About} />
            <Route path={`${path}/contact`}  component={Contact} />
            <Route path={`${path}/cart`}  component={Cart} />
            <Route path={`${path}/products`} exact component={PDP} />
            <Route path={`${path}/products/:id`}  component={Product_Details} />
            <Route path={`${path}/movies`} exact component={Movies} />
            <Route path={`${path}/signin`} exact component={SignIn} />
            <Route path={`${path}/signup`} exact component={SignUp} />
            <Route path={`${path}/orderPlaced`} exact component={OrderPlaced} />

            <Route path={`${path}/adminPanel`}  component={Panel} />            
            <Route component={()=><h1>404 Not Found</h1>}/>
        </Switch>

        {/* <Panel /> */}
        <Footer />
      </BrowserRouter>

      
    </div>
   );
}


// class Movies extends Component{
 
//     constructor(props){

//     }
// }
 
export default App;


 




 