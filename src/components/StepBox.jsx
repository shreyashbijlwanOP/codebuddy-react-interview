import { useFormData } from '../context/FormContext';
import Steps from './Steps';

const StepBox = () => {
  const { formState } = useFormData();
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-4 m-auto mt-4">
          <div className="stage-box">
            {new Array(3).fill(-1).map((_, index) => (
              <Steps step={index + 1} key={formState[index + 1].page} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepBox;
