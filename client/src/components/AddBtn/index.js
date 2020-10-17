import React from 'react';
import "./style.css";

function AddButton(props) {
    return (

        <div className="card-header text-right">
            <button type="add" onClick={props.buttonClicked}  className="btn btn-primary">Add</button>
        </div>
    )
}
export default AddButton;