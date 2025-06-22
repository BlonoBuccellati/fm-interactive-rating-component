import Image from "next/image";
import { iconStar } from "../assets";

const StarIcon = () => {
  return (
    <div className="text-grey-500 bg-grey-900 w-[40px] rounded-full text-center">
      <Image
        alt=""
        src={iconStar.src}
        width={10}
        height={10}
        className="w-full p-[12px]"
      />
    </div>
  );
};

export default StarIcon;
