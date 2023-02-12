import { useState } from "react";
import React from "react";


function Profile() {

    const [training, setTraining] = useState([

        {
            id: 1,
            title: 'Java FSD',
            desc: 'Java FSD Training Morning Batch',
            isCompleted: true
        },
        {
            id: 2,
            title: 'Java FSD With Cloud',
            desc: 'Java FSD Training Eveninh Batch',
            isCompleted: false

        },
        {
            id: 3,
            title: 'Java FSD with REACT',
            desc: 'Java FSD Training Morning Batch',
            isCompleted: true
        }

    ])

    function tickmark(id) {

        let index = training.indexOf(training.filter(item => item.id === id)[0])
        training[index].isCompleted = training[index].isCompleted ? false : true;
        setTraining([...training])
    }


    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <ul className="list-group">
                        {
                            training.map(item =>
                                    
                                    <li className="list-group-item" key={item.id}>
                                      
                                      <input className='me-2' type="checkbox" onChange={tickmark.bind(this, item.id)} />
                                      {
                                          item.isCompleted ? <span className='text-success'>
                                            {
                                              item.desc
                                            }
                                          </span>   :    <span className='text-danger'>
                                            {item.desc}
                                          </span>
                                      }
                                    </li>
                                )         
                        }
                    </ul>
                </div>

            </div>


        </div>

    )

}

export default Profile;