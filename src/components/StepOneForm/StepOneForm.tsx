import React, { ChangeEvent, FC } from 'react';

interface StepOneFormProps {
  name?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  next?: () => void;
}

// const StepOneForm: FC<StepOneFormProps> = ({ name, handleChange, next }) => {
//   return (
//     <form>
//       <label>
//         Name:
//         <input type="text" name="name" value={name} onChange={handleChange} />
//       </label>
//       <button type="button" onClick={next}>Next</button>
//     </form>
//   );
// }
const StepOneForm: FC<StepOneFormProps> = ({ name = "dd" }) => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={name}  />
      </label>
      <button type="button">Next</button>
    </form>
  );
}

export default StepOneForm;
