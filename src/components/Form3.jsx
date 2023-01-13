import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useFormData } from '../context/FormContext';
import HandleChange, { ValidateCountryCode, ValidateMobile } from '../context/Helper';
import 'react-toastify/dist/ReactToastify.css';

const Form3 = () => {
  const [validate, setValidate] = useState(false);
  const { data, formState, setFormState, setData } = useFormData();
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState({
    countryCode: data.countryCode,
    phoneNumber: data.phoneNumber,
  });
  async function HandlePost() {
    try {
      const res = await fetch('https://codebuddy.review/submit', {
        // Adding method
        method: 'POST',
        // Adding body  to send
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.message === 'Success') {
        toast('Data saved Successfully redirecting to post page ');
        setTimeout(() => {
          navigate('/posts');
        }, 5000);
      }
    } catch (err) {
      toast(err.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setValidate(true);
    if (
      form.checkValidity() &&
      ValidateMobile(currentState.phoneNumber) &&
      ValidateCountryCode(currentState.countryCode)
    ) {
      setData({
        ...data,
        countryCode: currentState.countryCode,
        phoneNumber: currentState.phoneNumber,
      });
      setFormState({ ...formState, '3': { ...formState['3'], state: true } });
      HandlePost();
    } else {
      setFormState({ ...formState, '3': { ...formState['3'], state: false } });
    }
  }

  const handleBack = () => navigate('/2');

  return (
    <div className="container">
      <div className="row">
        <div className=" col-10 col-md-4 m-auto rounded shadow mt-5">
          <h1 className="text-center my-2">Step 1</h1>
          {/* Creating Form */}
          <Form
            noValidate
            validated={validate}
            onSubmit={e => {
              handleSubmit(e);
            }}
            className="p-3"
          >
            <Row>
              <Form.Label>Mobile</Form.Label>
              {/* countryCode  Section */}
              <Form.Group as={Col} xs="4">
                <Form.Select
                  required
                  name="countryCode"
                  value={currentState.countryCode}
                  onChange={e => {
                    HandleChange(e.target, currentState, setCurrentState);
                  }}
                >
                  <option value="">code</option>
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </Form.Select>
                {validate && !ValidateCountryCode(currentState.countryCode) && (
                  <div className="text-danger">select valid code</div>
                )}
              </Form.Group>
              {/* Mobile Number */}
              <Form.Group as={Col} xs="8">
                <Form.Control
                  type="tel"
                  required
                  maxLength={10}
                  minLength={10}
                  value={currentState.phoneNumber}
                  placeholder="Enter mobile number"
                  name="phoneNumber"
                  isValid={ValidateMobile(currentState.phoneNumber)}
                  onChange={e => {
                    HandleChange(e.target, currentState, setCurrentState);
                  }}
                />
                {validate && !ValidateMobile(currentState.phoneNumber) && (
                  <div className="text-danger">please provide valid number (only numbers)</div>
                )}
              </Form.Group>
            </Row>
            {/* CheckBox Section */}
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              className="my-2"
            />
            {/* Buttons Sections */}
            <div className="d-flex justify-content-between my-2">
              <Button variant="dark" onClick={handleBack}>
                Back
              </Button>
              {/* Save and next Button */}
              <div>
                <Button className="me-2 mt-2" type="submit">
                  Save
                </Button>
                <Button variant="light" className="me-2 mt-2" disabled>
                  Save & Next
                </Button>
              </div>
            </div>
          </Form>
          <ToastContainer
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Form3;
