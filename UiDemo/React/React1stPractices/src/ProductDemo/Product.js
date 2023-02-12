import { useState } from "react"

let Data1 = [

    {
        id: 1,
        pname: 'Laptop',
        price: 75000
    },
    {
        id: 2,
        pname: 'Camera',
        price: 25000
    },
    {
        id: 3,
        pname: 'Mobile Phone',
        price: 45000
    }
]

let Data2 = [
    {
        id: 1,
        pname: 'HP',
        price: 55000
    },
    {
        id: 2,
        pname: 'Sony',
        price: 20000
    },
    {
        id: 3,
        pname: 'Apple',
        price: 41000
    }

]
const Product = () => {

    const [username, setUsername] = useState('ranjave');
    const [product, setProduct] = useState(Data1)

    const changeState = () => {

        setUsername('Goswasa')
        setProduct(Data2)
    }

    const resetState = () => {
        setUsername('ranjave');
        setProduct(Data1)
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">

                    <h3>
                        {username}
                    </h3>
                    <ul className="list-group">
                        {
                            product.map(i =>
                                <li key={i.id}> {i.pname} {i.price}</li>)
                        }
                    </ul>
                </div>
                
            </div>

            <button onClick={changeState}>Know new price        </button>
            <br></br>
            <button onClick={resetState}>reset        </button>

        </div>


    )
}

export default Product;