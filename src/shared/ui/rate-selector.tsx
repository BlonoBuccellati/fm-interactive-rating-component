import { cn } from "../lib/utils";

type RateSelectorProps = {
  num: number;
  isSelect: boolean;
  className?: string;
};
const RateSelector = ({ num, isSelect, className }: RateSelectorProps) => {
  return (
    <span
      className={cn(
        "text-grey-500 bg-grey-900 typo-3 hover:text-grey-900 flex size-fit items-center justify-center rounded-full px-200 py-100 text-center hover:cursor-pointer hover:bg-white hover:transition-colors hover:duration-300 active:bg-orange-500 active:transition-none",
        className,
        isSelect && "bg-orange-500 text-gray-900",
      )}
    >
      {num}
    </span>
  );
};

export default RateSelector;
