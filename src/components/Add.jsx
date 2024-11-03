import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, FormLabel } from '@mui/material';
import { uploadEmployeeAPI } from '../services/allApi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Add = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // Start with an empty string for status

  // Validation states
  const [isIdValid, setIsIdValid] = useState(true);
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isStatusValid, setIsStatusValid] = useState(true);

  const [isFormValid, setIsFormValid] = useState(false);

  // Input validation function
  const userInputValidation = (inputData) => {
    const { name, value } = inputData;

    if (name === "id") {
      setId(value);
      setIsIdValid(/^\d+$/.test(value));
    } else if (name === "userName") {
      setUserName(value);
      setIsUserNameValid(/^[a-zA-Z\s]+$/.test(value));
    } else if (name === "email") {
      setEmail(value);
      setIsEmailValid(/\S+@\S+\.\S+/.test(value));
    }

    checkFormValidity(); // Check validity after each input change
  };

  // Check form validity
  const checkFormValidity = () => {
    const validForm = 
      id && isIdValid &&
      userName && isUserNameValid &&
      email && isEmailValid &&
      status; // Ensure status is not empty

    setIsFormValid(validForm);
  };

  const handleReset = () => {
    setId("");
    setUserName("");
    setEmail("");
    setStatus(""); // Reset status to empty string

    setIsIdValid(true);
    setIsUserNameValid(true);
    setIsEmailValid(true);
    setIsStatusValid(true);
    setIsFormValid(false); // Reset the form validity
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      const employeeDetails = { id, userName, email, status }
      try {
        const response = await uploadEmployeeAPI(employeeDetails);
        console.log("Employee Added: ", response.data);
        
        alert("Employee added successfully!");
        handleReset();
        navigate('/home'); // Navigate back to home page after successful addition
      } catch (error) {
        console.error("Error uploading employee:", error);
        alert("Error adding employee. Please try again.");
      }
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <div className="shadow p-4" style={{ borderRadius: '8px', backgroundColor: 'white' }}>
        <h1 style={{ textAlign: 'center' }}>Add Employee</h1>
        <form>
          <div className='mb-3'>
            <TextField
              name='id'
              onChange={e => userInputValidation(e.target)}
              value={id}
              className='w-100'
              label="EmpID"
              variant="outlined"
            />
            {!isIdValid && <div className='text-danger'>*ID must be a number</div>}
          </div>

          <div className='mb-3'>
            <TextField
              name='userName'
              onChange={e => userInputValidation(e.target)}
              value={userName}
              className='w-100'
              label="User Name"
              variant="outlined"
            />
            {!isUserNameValid && <div className='text-danger'>*Invalid User Name (letters and spaces only)</div>}
          </div>

          <div className='mb-3'>
            <TextField
              name='email'
              onChange={e => userInputValidation(e.target)}
              value={email}
              className='w-100'
              type='email'
              label="Email"
              variant="outlined"
            />
            {!isEmailValid && <div className='text-danger'>*Valid Email is Required</div>}
          </div>

          <div className='mb-3'>
            <FormControl fullWidth>
              <FormLabel>Status</FormLabel>
              <TextField
                select
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                  setIsStatusValid(e.target.value !== ""); // Check if a selection is made
                  checkFormValidity(); // Check form validity
                }}
                className='w-100'
              >
                <MenuItem value="">
                  <em>Select Status</em> {/* Placeholder option */}
                </MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </TextField>
            </FormControl>
            {!isStatusValid && <div className='text-danger'>*Status is required</div>} {/* Show validation message for status */}
          </div>

          <div className='mb-3 text-center'>
            <Button 
              onClick={handleSubmit} 
              disabled={!isFormValid} 
              style={{ width: '150px', height: '50px', marginRight: '20px', backgroundColor: isFormValid ? 'green' : 'grey' }} 
              variant="contained"
            >
              Add Employee
            </Button>
            <Button className='bg-danger' onClick={handleReset} style={{ width: '150px', height: '50px' }} variant="contained">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
