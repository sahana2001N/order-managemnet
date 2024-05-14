import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeDetails({ match }) {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/emp/get-emp-by-id/{employeeId}`);
        setEmployee(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employee:', error);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p><strong>FirstName:</strong> {employee.firstName}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      {/* Add more fields as needed */}
    </div>
  );
}

export default EmployeeDetails;
