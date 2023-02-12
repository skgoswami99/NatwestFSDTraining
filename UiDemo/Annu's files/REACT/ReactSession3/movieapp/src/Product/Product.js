import { useState } from "react";

const Product = ()=>{

    const [username, setUsername] = useState('User1');

    const [product, setProductDetails] = useState([

        {
            id:1,
            pname:'Laptop',
            price: 45000
        },
        {
            id:2,
            pname:'Camera',
            price: 25000
        },
        {
            id:3,
            pname:'Mobile Phone',
            price: 15000
        }
    ]);

    const changeData = () =>{

        setUsername('User2')
        setProductDetails([{
            id:10,
            pname:'Laptop1',
            price: 450000
        },
        {
            id:20,
            pname:'Camera1',
            price: 250000
        },
        {
            id:30,
            pname:'Mobile Phone1',
            price: 150000
        }])

    }

    return(

        <div className="container">
            <div className="row">
                <div className="col-md-4">
                                <h1>
                                    {username}
                                </h1>
                    <ul className="list-group">
                        {
                            product.map(item =>
                                    <li className="list-group-item" key={item.id}>{item.pname} {item.price}</li>
                                    
                                )         
                        }
                    </ul>
                </div>
            </div>
                <button onClick={changeData}>Submit to Change State</button>
        </div>

    )

}

export default Product;