import {InputProps} from "@/types/app.types";

const Input = ({name, onChange, value}: InputProps) => {
  return (
      <>
        <input type="number" name={name} placeholder='ex. 28' onChange={onChange} value={value}
               className='mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
      </>
  );
};

export default Input;
