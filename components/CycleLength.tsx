import {CycleLengthProps} from "@/types/app.types";
import Tag from "@/components/Tag";

const CycleLength = ({onQuickSelection}:CycleLengthProps) => {
  return (
      <div className='mt-6 flex flex-col md:flex-row flex-1 sm:items-stretch sm:justify-start'>
        <div className="flex mb-2 md:mb-0 items-center">
          <span className='text-gray-400 text-sm font-medium'>
            Quick Selections
          </span>
        </div>
        <div className="md:ml-6">
          <div className="flex space-x-4">
            <Tag  value={27} onQuickSelection={onQuickSelection} />
            <Tag  value={28} onQuickSelection={onQuickSelection} />
            <Tag  value={29} onQuickSelection={onQuickSelection} />
            <Tag  value={30} onQuickSelection={onQuickSelection} />
            <Tag  value={31} onQuickSelection={onQuickSelection} />
          </div>
        </div>
      </div>
  );
};

export default CycleLength;
