import {HeadlineProps} from "@/types/app.types";

const Headline = ({primary, secondary}: HeadlineProps) => {
  return (
      <>
        <h3 className='text-lg font-medium leading-6 text-gray-600'>{primary}</h3>
        <p className='mt-1 text-sm text-gray-600'>{secondary}</p>
      </>
  );
};

export default Headline;
