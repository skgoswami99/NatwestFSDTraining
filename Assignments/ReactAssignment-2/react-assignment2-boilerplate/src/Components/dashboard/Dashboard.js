import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cards from '../card/Card';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Auth from '../../services/Services';

// import Card from '../card/Card'

export default function Dashboard() {

    const navigate = useNavigate();
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("")

    const [searchtext, setSearchText] = React.useState("");



    React.useEffect(() => {
        Auth()
            .then(data => {

                if (data.isAuthenticated === false) {
                    navigate("/login");
                }
                else {
                    axios.get('https://newsapi.org/v2/top-headlines?country=in&apikey=7ffcc951de784f3fa758911ae4efa837&page=1',

                    )
                        .then(res => {
                            setNews(res.data.articles);

                            setCategory("Trending News")
                        })
                        .catch((err) => {
                            console.log(err);
                        })


                };
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    function readLater(news) {
        // const saveDetails = {
        //     Link: AUrl,
        //     Description: BDesc
        // }
        fetch(`http://localhost:3001/api/v1/news`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(news)
        })
            .then(res => res.json())
            .then(data => { alert('News Saved to Read Later') })
    }

    function sports() {
        axios.get('https://newsapi.org/v2/top-headlines?category=sports&country=in&apikey=7ffcc951de784f3fa758911ae4efa837&page=1', {

        })

            .then(res => {
                setNews(res.data.articles);
                setCategory("Sports News")
            })
    }

    function business() {
        axios.get('https://newsapi.org/v2/top-headlines?category=business&country=in&apikey=7ffcc951de784f3fa758911ae4efa837&page=1', {

        })

            .then(res => {
                setNews(res.data.articles);
                setCategory("Business News")
            })
    }

    function search(searchkeyword) {


        axios.get(`https://newsapi.org/v2/everything?q=${searchkeyword}&apiKey=7ffcc951de784f3fa758911ae4efa837&language=en&page=1`, {

        })

            .then(res => {
                setNews(res.data.articles);
                setCategory("Searched News")
            })
    }


    return (

        <div>


            <div className="container mt-2">
                <div>
                    <Nav className='bg-dark p-1' variant="pills" defaultActiveKey="">
                        <Nav.Item>
                            <Nav.Link className='text-white nlink' onClick={sports} eventKey="link-1" href="">Sports News</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='me-2 text-white nlink' onClick={business} eventKey="link-2">Business News</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Form className="border-white d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search News"
                                    className="border-dark me-2"
                                    aria-label="Search"
                                    onChange={(event) => { setSearchText(event.target.value) }}
                                />
                                <Button className="text-white border-white But1" onClick={search.bind(this, searchtext)} variant="outline-dark">Search</Button>
                            </Form>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="row">
                    <h2 data-testid="test1" id="heading1" className="text-center"> * * * {category} * * * </h2>
                    {
                        news.map(item => <Cards submitHandler={readLater} key={item.title.toString()} img={item.urlToImage}
                            author={item.author} title={item.title} link={item.url} desc={item.description} news={item} />)
                    }
                </div>
            </div>
        </div>
    )
}