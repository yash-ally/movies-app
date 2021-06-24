import React from 'react'; //imr

import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap 

import Footer from './component/Footer'
import Topbar from './component/Topbar'

import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Cart from './component/Cart'
import PDP from './component/PDP'
import Product_Details from './component/Product_Details'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {  //sfc
  return ( 
    <div>

      

      {/* <Products/> */}
      <BrowserRouter>
      <Topbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact"  component={Contact} />
            <Route path="/cart"  component={Cart} />
            <Route path="/products" exact component={PDP} />
            <Route path="/products/:id"  component={Product_Details} />
            <Route component={()=><h1>404 Not Found</h1>}/>
        </Switch>
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


 




 