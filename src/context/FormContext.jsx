import { createContext, useContext, useState } from 'react';

const formData = createContext(null);
const FormContext = ({ children }) => {
  const [data, setData] = useState({
    'emailId': '',
    'password': '',
    'firstName': '',
    'lastName': '',
    'address': '',
    'countryCode': '',
    'phoneNumber': '',
  });
  const [formState, setFormState] = useState({
    '1': { page: 1, state: false },
    '2': { page: 2, state: false },
    '3': { page: 3, state: false },
  });
  return (
    <formData.Provider value={{ data, setData, formState, setFormState }}>
      {children}
    </formData.Provider>
  );
};

export default FormContext;

export const useFormData = () => useContext(formData);
