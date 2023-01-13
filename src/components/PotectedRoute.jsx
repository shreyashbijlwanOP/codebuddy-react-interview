import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useFormData } from '../context/FormContext';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const useLoc = useLocation();
  const { formState } = useFormData();
  const path = useLoc.pathname.slice(1) - 1;
  useEffect(() => {
    if (!formState[path].state) {
      navigate('/');
    }
  }, []);
  return children;
};

ProtectedRoute.propsType = {
  children: PropTypes.object.isRequired,
};

export default ProtectedRoute;
