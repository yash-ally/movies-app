import React from 'react';

import './index.module.css';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:0,
            product: [],
            loader: true,
        };
    }

    // componentDidMount(){
    //     fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    //     .then(res => res.json())
    //     .then(res => {
    //         this.setState({
    //             product: res,
    //             loader: false
    //         })
    //     }, 5000)
    // }

    

    render(){
        console.log("Second constructor call parent")
        // const {loader, product} = this.state;

        return(
            <div>
                   {/* <h1>Products</h1> 
                   {this.state.loader ? 
                    (<h1>Loading...</h1>):
                    (this.state.product.length &&
                    this.state.product.map(({name, preview, brand}) => (
                    <div className="items">
                        <img src={preview} width={200} />

                        <h1>{name}</h1>
                        <h3>{brand}</h3>
                    </div>
                    )))
                } */}


                <Child
                    value = {this.state.value}
                    incCount={()=>this.setState({value: ++this.state.value})}
                    decCount={()=>this.setState({value: --this.state.value})}
                />

            </div>
        );
    }
}

export default Parent;

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.state.value= 0;
    }


    shouldComponentUpdate(nextProps, nextState)
    {
        console.log(this.state.value, nextState.value)
        if(nextState.value < 6 && nextState.value >=0)
         return true;
        
        else{
            if(nextState.value >= 6)
            {
                nextState.value = 5;
            }
            else if(nextState.value<=0)
            {
                nextState.value = 0;
            }
            return false;
        }   
    }

    render() {
        return (
             <div>
                 <h1>{this.state.value}</h1>
                 <button onClick={()=> this.setState({value:this.state.value+1})}>Click to increment</button>
                 <button onClick={()=> this.setState({value:this.state.value-1})}>Click to decrement</button>
             </div>
        );
    }
}





// class PlacesGrid extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             value: this.props.value,
//         };
//     }
//     updateVal = () => {
//         if (value == 0) {
//             this.setState({value: 0});
//         }
//         if(value == 10) {
//             this.setState({value: 10});
//         }
//     };

// render() {
//     return(

//     );
// }

// };



// const PlacesGrid = () => {
//     return ( 
//         <div>

            
//             <button id="minus">Minus</button>
//             <button id="plus">Plus</button>
//         </div>
      
//      );
//   }

//   export default PlacesGrid;