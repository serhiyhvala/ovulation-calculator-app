import {TagProps} from "@/types/app.types";

const Tag = ({value, onQuickSelection}:TagProps) => {
  return (
      <span onClick={() => onQuickSelection(value)} className='cursor-pointer bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>
        {value}
      </span>
  );
};

export default Tag;
