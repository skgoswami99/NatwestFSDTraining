import React from 'react'
import { connect } from 'react-redux';
import { deleteItem } from "../Redux/action";
function TodoItem(props) {
    function DeleteItemHandler(id) {
        props.deleteItem(id);
    }
    return (
        <div className="card mt-2" style={{ width: "25rem" }}>
            <div className="card-body">
                <i onClick={DeleteItemHandler.bind(this, props.id)} 
                className="fa-solid fa-xmark fa-2x mt-1 float-end text-danger"></i>
                <h5 className="card-title">
                    {props.text}
                    </h5>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    todoList: state?.todoList
});

export default connect(mapStateToProps, { deleteItem })(TodoItem);

// import React from 'react'
// import { connect } from 'react-redux';
// import { deleteItem } from '../Redux/action';

// function TodoItem(props) {
//     return (
//         <div className="card mt-2" style={{width:"25 rem"}}>
//             <div className="card-body">
//                 <h5 className="card-title">{props.text}</h5>
                
//             </div>
//         </div>
//     )
// }

// const mapstateToProps = (state) =>({
//     todoList:state?.todoList
// })
// export default connect(mapstateToProps, {deleteItem}) (TodoItem);