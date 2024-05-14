import React, { useState } from 'react';
import axios from 'axios';

function DeleteEmp() {
    const [empList, setEmpList] = useState([]);

   
    const handleDelete = async (id) => {
        try {
           
            await axios.delete(`/api/employees/${id}`);
            
           
            setEmpList(empList.filter(emp => emp.id !== id));
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };



    return (
        <div>
           
        </div>
    );
}

export default DeleteEmp;
