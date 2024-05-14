
// import axios from "axios";
// import { useState } from "react";
// import EmpService from "../services/EmployeeService";
// import Employee from "./Employee";
// import EmployeeService from "../services/EmployeeService";  //
// import { useDispatch, useSelector } from "react-redux";
// import { addAllEmp } from "../redux/EmpSlice";

// const AddEmployee = () => {
//     const backendUrl = 'http://localhost:8000/emp/add-emp';
//     const dispatch=useDispatch();   //
//     const empData=useSelector(state=> state.emp.empDataList) //
//     //const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });
//     const [errors, setErrors] = useState({});

//     const handleChange = (evt) => {
//         //setEmpData({ ...empData, [evt.target.name]: evt.target.value });
//         setErrors({ ...errors, [evt.target.name]: '' });
//     };

//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};

//         if (!empData.firstName.trim()) {
//             newErrors.firstName = "First name is required";
//             isValid = false;
//         }

//         if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
//             newErrors.email = "Invalid email address";
//             isValid = false;
//         }

//         if (!/^\d{12}$/.test(empData.aadhaar)) {
//             newErrors.aadhaar = "Aadhaar must be a 12-digit number";
//             isValid = false;
//         }

//         if (empData.salary <= 0 || isNaN(empData.salary)) {
//             newErrors.salary = "Salary must be a positive number";
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         if (validateForm()) {
//             axios.post(backendUrl, empData)
//                 EmployeeService.AddEmployee() //
//                 .then((resp) => {
//                     alert(`${resp.data.firstName} added successfully!`);
//                     //setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
//                     dispatch(addAllEmp(resp));
//                 })
//                 .catch(error => {
//                     console.error("Error adding employee:", error);
//                 });
//         }
//     };

        
//     return (
//         <>
            

// <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
// <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
//     <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Add Employee</h2>
//  <form onSubmit={handleSubmit}>
//     <label class="form-label">First Name</label>
//     <input type="text" class="form-control" id="firstName" name="firstName" value={empData.firstName}
//                     onChange={handleChange} placeholder="Enter first name" required autoFocus />
//                     {errors.firstName && <span className="error">{errors.firstName}</span>}

//     <label class="form-label">Email</label>
//     <input type="email" class="form-control" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
//                 {errors.email && <span className="error">{errors.email}</span>}
                    
//     <label class="form-label">aadhaar</label>
//     <input type="number" class="form-control" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
//                 {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
//     <label class="form-label">Salary</label>
//     <input type="number" class="form-control" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
//                 {errors.salary && <span className="error">{errors.salary}</span>}            

//         <button type="submit" class="btn btn-primary">Add Employee</button>
//    </form>
//    </div>
//    </div>
//         </>
//     );
// };

// export default AddEmployee;


import axios from "axios";
import { useState } from "react";

const AddEmployee = () => {
    const backendUrl = 'http://localhost:8000/emp/add-emp';
    const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!empData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        if (!/^\d{12}$/.test(empData.aadhaar)) {
            newErrors.aadhaar = "Aadhaar must be a 12-digit number";
            isValid = false;
        }

        if (empData.salary <= 0 || isNaN(empData.salary)) {
            newErrors.salary = "Salary must be a positive number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            axios.post(backendUrl, empData)
                .then((resp) => {
                    alert(`${resp.data.firstName} added successfully!`);
                    setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
                })
                .catch(error => {
                    console.error("Error adding employee:", error);
                });
        }
    };

        
    return (
        <>
            

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
<div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Add Employee</h2>
 <form onSubmit={handleSubmit}>
    <label class="form-label">First Name</label>
    <input type="text" class="form-control" id="firstName" name="firstName" value={empData.firstName}
                    onChange={handleChange} placeholder="Enter first name" required autoFocus />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}

    <label class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
                {errors.email && <span className="error">{errors.email}</span>}
                    
    <label class="form-label">aadhaar</label>
    <input type="number" class="form-control" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
                {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
    <label class="form-label">Salary</label>
    <input type="number" class="form-control" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
                {errors.salary && <span className="error">{errors.salary}</span>}            

        <button type="submit" class="btn btn-primary">Add Employee</button>
   </form>
   </div>
   </div>
        </>
    );
};

export default AddEmployee;
