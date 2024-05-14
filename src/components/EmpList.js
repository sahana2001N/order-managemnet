// import axios from "axios";
// import { useEffect, useState } from "react";
// import EmployeeService from "../services/EmployeeService";
// import { setAllEmp } from "../redux/EmpSlice";
// import {useDispatch,useSelector} from "react-redux";
// const EmpList = () => {

//     //const [empList, setEmpList] = useState('');

    
//     const dispatch=useDispatch();
//     const empList=useSelector(state=>state.emp.empDataList)
//     useEffect(() => {
//         console.log('useEffect');
//        // axios.get('http://localhost:8000/emp/get-all-emps')
//             EmployeeService.getEmployee()
//             .then((resp) => {
//                 console.log(resp.data);
//                 //setEmpList(resp.data);
//                 dispatch(setAllEmp(resp));
//             })
//     }, []);
//     // const handleDelete = async (employeeId) => {
//     //     try {
//     //        console.log(employeeId);
//     //         await axios.delete(`http://localhost:8000/emp/delete-emp/${employeeId}`);
//     //         setEmpList(empList.filter(emp => emp.employeeId !== employeeId));
//     //         //setEmpList('');
//     //     } catch (error) {
//     //         console.error('Error deleting employee:', error);
//     //         throw new error(error)
//     //     }

        
//     // };

    

//     return (
//         <>
//             <div style={{ padding: '2px', border: '1px solid #ccc', borderRadius: '1px', backgroundColor: '#fff' }}>
//                 <h2 style={{ textAlign: 'center', marginBottom: '5px' }}>Updated data</h2>
//                 <div>
//                     <table className="table table-bordered text-center">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th>FirstName</th>
//                                 <th>Email</th>
//                                 <th>Actions</th> 
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {empList && empList.map(emp =>
//                                 <tr key={emp.id}>
//                                     <td>{emp.firstName}</td>
//                                     <td>{emp.email}</td>
//                                     <td>
//                                         {/* <button className="btn btn-danger" onClick={() => handleDelete(emp.employeeId)}>Delete</button> */}
//                                         {/* <button className="btn btn-primary" onClick=>Update</button> */}
//                                         {/* <button type="submit" className="btn btn-primary" >update</button> */}

//                                     </td> 
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>


//         </>
//     );
// };

// export default EmpList;

import axios from "axios";
import { useEffect, useState } from "react";
const EmpList = () => {
    const [empList, setEmpList] = useState('');
    useEffect(() => {
        console.log('useEffect');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                console.log(resp.data);
                setEmpList(resp.data);
            })
    }, []);
    return (
        <>
            <h1>EmpList Component</h1>
            <table>
                <thead>
                    <th>Name</th> <th>Username</th> <th>Email</th> <th>City</th>
                </thead>
                <tbody>
                    {empList && empList.map(emp =>
                        <tr key={emp.id}>
                            <td >{emp.name} </td>
                            <td >{emp.username} </td>
                            <td >{emp.email} </td>
                            <td >{emp.address.city} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};
export default EmpList;








