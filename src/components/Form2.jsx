import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormContext';
import HandleChange, { ValidateAddress, ValidateName } from '../context/Helper';

const Form2 = () => {
  const navigate = useNavigate();
  const [validate, setValidate] = useState(false);
  const { data, formState, setFormState, setData } = useFormData();
  const [currentState, setCurrentState] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
  });

  function HandleSave() {
    setValidate(true);
    if (ValidateName(currentState.firstName) && ValidateAddress(currentState.address)) {
      console.log(ValidateAddress(currentState.address));
      setData({
        ...data,
        firstName: currentState.firstName,
        lastName: currentState.lastName,
        address: currentState.address,
      });
      setFormState({
        ...formState,
        '2': { ...formState['2'], state: true },
      });
      return true;
    }

    setFormState({
      ...formState,
      '2': { ...formState['2'], state: false },
      '3': { ...formState['3'], state: false },
    });
    return false;
  }

  const handleNext = () => {
    if (HandleSave()) {
      navigate('/3');
    }
  };

  const handleBack = () => navigate('/1');

  return (
    <div className="container">
      <div className="row">
        <div className=" col-10 col-md-4 m-auto rounded shadow mt-5">
          <h1 className="text-center my-2">Step 2</h1>
          {/* Creating Form */}
          <Form className="p-3" noValidate validated={validate}>
            {/* First Name Section */}
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              name="firstName"
              type="text"
              placeholder="enter your first name"
              minLength={2}
              maxLength={50}
              value={currentState.firstName}
              onChange={e => {
                HandleChange(e.target, currentState, setCurrentState);
              }}
            />
            {/* Email FeedBack Section */}
            {validate && !ValidateName(currentState.firstName) && (
              <div className="text-danger mt-2"> min length is 2 max is 50 must be Alphabet. </div>
            )}

            {/* Last Name Section optional */}
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your last name"
              name="lastName"
              value={currentState.lastName}
              onChange={e => {
                HandleChange(e.target, currentState, setCurrentState);
              }}
            />

            {/* address */}
            <Form.Label className="mt-2">Address</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter address here..."
              minLength={10}
              name="address"
              value={currentState.address}
              onChange={e => {
                HandleChange(e.target, currentState, setCurrentState);
              }}
            />
            {/* Password Feedback Section */}
            {validate && !ValidateAddress(currentState.address) && (
              <div className="text-danger mt-2"> At Least 10 characters. </div>
            )}
            {/* Buttons Sections */}
            <div className="d-flex justify-content-between my-2">
              <Button variant="dark" className="me-2" onClick={handleBack}>
                Back
              </Button>
              {/* Save and next Button */}
              <div>
                <Button
                  className="me-2 mt-2"
                  onClick={() => {
                    HandleSave();
                  }}
                >
                  Save
                </Button>
                <Button variant="success" className="me-2 mt-2" onClick={handleNext}>
                  Save & Next
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Form2;
