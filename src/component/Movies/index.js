import React from 'react'

import './index.css'

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movieList: [],
            originalMovies: [],
            loader: true,
            searchValue: "",
        };
    }

    componentDidMount(){
        fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war").then(res => res.json())
        .then( data => {
            this.setState({
                movieList: data.Search,
                originalMovies: data.Search,
                loader: false
            })
        }, 4000)
    }

    searchServer = () => {
        fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war").then(res => res.json())
        .then( data => {
            this.setState({
                movieList: data.Search,
                originalMovies: data.Search,
                loader: false
            })
        }, 4000)
    }

    searchMovies = () => {

        if(this.state.originalMovies.length)
        {
            const filteredMovies = this.state.originalMovies.filter( item => {
                return (item.Year.includes(this.state.searchValue) || item.Title.includes(this.state.searchValue))
            })
            this.setState({movieList: filteredMovies})
        }
    }


    render(){
        return(
            <div >

                <div className="top">
                    <h2>HOOKED</h2>
                </div>

                <div className= "inputs">
                    <input  onChange={(e) => this.setState({ searchValue: e.target.value })} />
                    <button onClick={ this.searchMovies}>Search</button>
                </div>
                

                <a href="http://localhost:3000/">
                    <h1 className="Title">Movies</h1>
                </a>
                    
                <div className="moviedata">
                    {this.state.loader ?
                    (<h1>Loading..</h1>):
                    (this.state.movieList.length && this.state.movieList.map(item =>
                    (
                        <div className="movienames">
                            <img src={item.Poster}/>
                            <h3>{item.Title}</h3>
                            <h4>{item.Year}</h4>
                        </div>
                    )))
                }
                
                </div>

                

            </div>
        );
    }

}
export default Parent;



// <input
// onChange={(e) => this.setState({ searchValue: e.target.value })}
// />
// <button onClick={() => {}}>Submit</button>