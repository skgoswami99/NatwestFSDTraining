import React from 'react';
import { useEffect, useState } from 'react';
import News from '../card/Card';
import Header from '../header/Header';
import axios from 'axios';
// import Card from '../card/Card'

export default function Dashboard() {

    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("")
 
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apikey=7ffcc951de784f3fa758911ae4efa837&page=1', {

            // headers:{
            // 'apikey': '7ffcc951de784f3fa758911ae4efa837'
            // }
        })

            .then(res => {
                setNews(res.data.articles);
                
                setCategory("Trending News")
            }).catch((err) => {
                console.log(err);
            })

    }, [])

    function readLater(AUrl, BDesc) {
        const saveDetails = {
            Link: AUrl,
            Description: BDesc
        }
       fetch(`http://localhost:3001/readLater`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(saveDetails)
        })
        .then(res => res.json())
            .then(data => { alert('News Saved to Read Later') })
    }

    function sports() {
        axios.get('https://newsapi.org/v2/top-headlines?category=sports&apikey=7ffcc951de784f3fa758911ae4efa837&page=1', {
      
        })
    
            .then (res => {
                setNews(res.data.articles);
                setCategory("Sports News")
       })
    }

    function business() {
        axios.get('https://newsapi.org/v2/top-headlines?category=business&apikey=7ffcc951de784f3fa758911ae4efa837&page=1', {
      
        })
    
            .then (res => {
                setNews(res.data.articles);
                setCategory("Business News")
       })
    }

    function search(searchkeyword) {

        
        axios.get(`https://newsapi.org/v2/everything?q=${searchkeyword}&apiKey=7ffcc951de784f3fa758911ae4efa837&language=en&page=1`, {
      
        })
    
            .then (res => {
                setNews(res.data.articles);
                setCategory("Searched News")
       })
    }
   
    return (

        <div>
        <Header sports={sports} business={business} search={search}/>
        

        <div className="container mt-2">
            <div className="row">
                <h2 data-testid="test1" id="heading1" className="text-center"> * * * {category} * * * </h2>
                {
                    news.map(item => <News submitHandler={readLater} key={item.title.toString()} img={item.urlToImage} 
                        author={item.author} title={item.title} link={item.url} desc={item.description}/>)
                }
            </div>
        </div>
        </div>
    )
}