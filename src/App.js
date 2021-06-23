import React from 'react'; //imr

import Footer from './component/Footer'
import PlacesGrid from './component/PlacesGrid'
import Topbar from './component/Topbar'

import Movie from './component/Movies'

import Comp from './component/pureComp';


const App = () => {  //sfc
  return ( 
    <div>

      {/* <Comp /> */}
      {/* <h1>App Component</h1> */}

      <Movie />

      {/* <Topbar />
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


 




 