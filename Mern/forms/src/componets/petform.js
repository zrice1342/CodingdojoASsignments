import React from 'react';


const petform = () => {
    return (
        <div className= "container">
            <div className = "form-group">
                <label htmlFor="">Name:</label>
                <input type="text" name="" id= "" className="form-control"></input>
            </div>
            <div className = "form-group">
                <label htmlFor="">animal Type:</label>
                <input type="text" name="" id= "" className="form-control"></input>
            </div>
            <div className = "form-group">
                <label htmlFor="">Service Required:</label>
                <select type="text" name="" id= "" className="form-control">
                    <option value ="">Reg</option>
                    <option value ="">Reg + </option>
                    <option value ="">Reg VIP</option>
                </select>
            </div>
        </div>
    );
};

export default petform;