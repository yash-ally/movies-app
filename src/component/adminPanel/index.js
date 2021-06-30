import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.css'

const Panel = (props) => {
    const [data_details, setdata] = useState({});
    const [isActive, setisActive] = useState(0)
    const [showResults, setshowResults] = useState({})
    const [searchValue, setsearchValue] = useState("")
    const [details, setDetails] = useState({

       id: "",
       firstName: "",
       lastName: "",
       
       description: "",
       Address: "",
       City: "",
       State: "",
       Zip: ""

    })

    useEffect(() => {
        axios("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
            .then((res) => { setdata(res.data) })
            // .then((res) => { setshowResults(res.data) })
            .catch((err) => alert(err));
    }, [])

    const toggleclassName = (index) => {
        setisActive(index);
    };

    let all = []

    const searchData = () => {
        let arr = []
        if (props.data_details.length) {
            data_details.filter((item) => {
              if(item.firstName.toLowerCase().includes(searchValue) || item.lastName.toLowerCase().includes(searchValue) || item.email.toLowerCase().includes(searchValue))
                arr = [...arr, item]
            })
            data_details(arr);
        }
    }

    return (
        <>
        {/* <div id="overlay">
            <img src="./img/preloader.gif" alt="Preloader icon" />
        </div> */}

        <main>

            <div id="table-section">

                <form action="/">
                    <img src='./img/search-icon.svg' alt="Search Icon" />
                    {/* <input type="text" placeholder="Enter something" name="search-box" id="search-box" value="" /> */}
                    <input type="text" placeholder="Enter something" name="search-box" id="search-box" value=""
                        onChange={(e) => { setsearchValue(e.target.value) }} />
                    <button onClick={{searchData}}>Search</button>
                </form>

                <div id="table-wrapper">

                    <div id="table-headers">
                        <table>
                            <thead>
                                <tr>
                                    <th className="column1">Id</th>
                                    <th className="column2">FirstName</th>
                                    <th className="column3">LastName</th>
                                    <th className="column4">Email</th>
                                    <th className="column5">Phone</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div id="table-data">
                        <table>
                            <tbody>
                                {data_details && data_details.length && data_details.map((item, index) => {
                                    return (
                                        <>
                                            <tr className="data-row" className={isActive === index ? "active" : null} onClick={(e) => 
                                                
                                                {
                                                    toggleclassName(index);

                                                    setDetails({
                                                        id: item.id,
                                                        firstName: item.firstName,
                                                        lastName: item.lastName,

                                                        description: item.description,
                                                        address: item.address.streetAddress,
                                                        city: item.address.city,
                                                        state: item.address.state,
                                                        zip: item.address.zip,
                                                })}}>

                                                <td className="column1">{item.id}</td>
                                                <td className="column2">{item.firstName}</td>
                                                <td className="column3">{item.lastName}</td>
                                                <td className="column4">{item.email}</td>
                                                <td className="column5">{item.phone}</td>
                                                {/* <button onClick={()=>toggleclassName(index)}>Show</button> */}
                                            </tr>
                                        </>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



            <div id="info-wrapper">
                <h1>Details</h1>
                <p>Click on a table item to get detailed information</p>
                {details?
                (<div className="info-content">
                    <h2>{`${details.firstName} ${details.lastName}`}</h2>
                    <div>
                        <b>Description: </b>
                        <textarea cols="50" rows="5" readonly value={details.description}>
                            
                        </textarea>
                    </div>

                    <div><b>Address:</b> {details.address}</div>
                    <div><b>City:</b> {details.city}</div>
                    <div><b>State:</b> {details.state}</div>
                    <div><b>Zip:</b> {details.zip}</div>

                </div>
                ) : (
                    <div></div>
                )
                }
                
            </div>

        </main>

        <div>

        </div>

        </>
    );
}

const domContainer = document.querySelector('#some_random_id');

export default Panel;

//var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
