import Image from "next/image";

import { iconStar } from "../assets";

const StarIcon = () => {
  return (
    <div className="text-grey-500 bg-grey-900 size-[clamp(2.5rem,2.023rem+2.04vw,3rem)] rounded-full text-center">
      <Image
        alt=""
        src={iconStar.src}
        width={10}
        height={10}
        className="w-full p-[clamp(0.75rem,0.511rem+1.02vw,1rem)]"
      />
    </div>
  );
};

export default StarIcon;
