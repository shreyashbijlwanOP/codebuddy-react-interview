import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormContext';
import HandleChange, { ValidateMail, ValidatePassword } from '../context/Helper';

const Form1 = () => {
  // use navigate Hook
  const navigate = useNavigate();
  const [validate, setValidate] = useState(false);
  const { data, formState, setFormState, setData } = useFormData();
  // basic State
  const [currentData, setCurrentData] = useState({
    'emailId': data.emailId,
    'password': data.password,
  });

  function handleSave() {
    setValidate(true);
    if (ValidateMail(currentData.emailId) && ValidatePassword(currentData.password)) {
      setData({ ...data, emailId: currentData.emailId, password: currentData.password });
      setFormState({ ...formState, '1': { ...formState['1'], state: true } });
      return true;
    }

    setFormState({
      ...formState,
      '1': { ...formState['1'], state: false },
      '2': { ...formState['2'], state: false },
      '3': { ...formState['3'], state: false },
    });
    return false;
  }

  const handleNext = () => {
    if (handleSave()) navigate('/2');
  };

  return (
    <div className="container">
      <div className="row">
        <div className=" col-10 col-md-4 m-auto rounded shadow mt-5">
          <h1 className="text-center my-2">Step 1</h1>
          {/* Creating Form */}
          <Form className="p-3" noValidate validated={validate}>
            {/* Email Section */}
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="enter email here"
              name="emailId"
              value={currentData.emailId}
              onChange={e => {
                HandleChange(e.target, currentData, setCurrentData);
              }}
            />
            {/* Email FeedBack Section */}
            {validate && !ValidateMail(currentData.emailId) && (
              <div className="text-danger mt-2">please provide a valid email</div>
            )}
            {/* Password */}
            <Form.Label className="mt-2">Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Enter password here..."
              name="password"
              onChange={e => {
                HandleChange(e.target, currentData, setCurrentData);
              }}
              value={currentData.password}
            />
            {/* Password Feedback Section */}
            {validate && !ValidatePassword(currentData.password) && (
              <div className="text-danger mt-2">
                Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special
                characters
              </div>
            )}
            {/* Buttons Sections */}
            <div className="d-flex justify-content-between my-2">
              <Button disabled variant="dark" className="me-2 mt-2">
                Back
              </Button>
              {/* Save and next Button */}
              <div>
                <Button
                  className="me-2 mt-2"
                  onClick={() => {
                    handleSave();
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

export default Form1;
