import { AiOutlineCheck } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useFormData } from '../context/FormContext';

const Steps = props => {
  const navigate = useNavigate();
  const { formState } = useFormData();
  const { step } = props;
  function handleButton() {
    if (formState[step].state) navigate(`/${step}`);
  }

  return (
    <button
      className={`stage ${formState[step].state ? 'bg-success' : ''}`}
      onClick={handleButton}
      type="submit"
    >
      {formState[step].state ? <AiOutlineCheck /> : step}
    </button>
  );
};

Steps.propsType = {
  props: PropTypes.object.isRequired,
};

export default Steps;
