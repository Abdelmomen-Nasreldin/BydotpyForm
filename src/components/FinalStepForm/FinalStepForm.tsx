import  { FC, FormEvent } from 'react';

interface FinalStepFormProps {
  prev: () => void;
  // Include any other props needed for form submission...
}

const FinalStepForm: FC<FinalStepFormProps> = ({ prev }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Submit formData to server...
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields... */}
      <button type="button" onClick={prev}>Previous</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FinalStepForm;
