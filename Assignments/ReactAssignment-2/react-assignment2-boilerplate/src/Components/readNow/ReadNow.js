
import React from 'react';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import DisplayCard from '../displayCard/DisplayCard.js';



export default function ReadNow() {

    // const navigate = useNavigate();
    const [savednews, setSavednews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/news', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => {
                setSavednews(data);
                // console.log(data);
            });

    }, [])

    // React.useEffect(() => {
    //     fetch('http://localhost:3001/auth/v1/isAuthenticated', {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         }
    //     }).then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.isAuthenticated === false) {
    //                 navigate("/");
    //             }

    //         });
    // }, [])

    return (

        <div>


            <div className="container mt-2">
                <div className="row">
                    <h2 id="heading1" className="text-center"> * * * Saved News * * * </h2>
                    {
                        savednews.map(item => <DisplayCard key={item.id} img={item.urlToImage}
                            author={item.author} title={item.title} link={item.url} desc={item.description} />)
                    }
                </div>
            </div>
        </div>
    )
}
