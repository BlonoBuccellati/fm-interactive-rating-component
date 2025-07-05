import Image from "next/image";

import { iconStar } from "../assets";

const StarIcon = () => {
  return (
    <div className="text-grey-500 bg-grey-900 tablet:size-[48px] size-[40px] rounded-full text-center">
      <Image
        alt=""
        src={iconStar.src}
        width={10}
        height={10}
        className="tablet:p-200 w-full p-[12px]"
      />
    </div>
  );
};

export default StarIcon;
