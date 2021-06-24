import React from 'react'; //imr

import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap 

import Footer from './component/Footer'
import PlacesGrid from './component/PlacesGrid'
import Topbar from './component/Topbar'

import Movie from './component/Movies'

import Comp from './component/pureComp';

import Counter from './component/useState'
import Products from './component/Products';

const App = () => {  //sfc
  return ( 
    <div>

      <Topbar />

      <Products/>

      {/* <Counter /> */}

      {/* <Comp /> */}
      {/* <h1>App Component</h1> */}

      {/* <Movie /> */}

      {/* 
      <PlacesGrid 
        value
      />
      <Footer /> */}
    </div>
   );
}


// class Movies extends Component{
 
//     constructor(props){

//     }
// }
 
export default App;


 




 