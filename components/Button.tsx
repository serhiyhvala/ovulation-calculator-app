import {ButtonProps} from "@/types/app.types";

const Button = ({onClick, disabled, children}: ButtonProps) => {
  return (
      <button type='button' disabled={disabled} onClick={onClick}
              className='inline-flex justify-center rounded-md border border-transparent
              bg-indigo-600 disabled:bg-gray-400
              disabled:cursor-not-allowed py-2 px-4 text-sm
              font-medium text-white shadow-sm
              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
        {children}
      </button>
  );
};

export default Button;
