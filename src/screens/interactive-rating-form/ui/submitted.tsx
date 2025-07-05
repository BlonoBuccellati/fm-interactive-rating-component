"use client";

import Image from "next/image";

import { iconThankYou } from "@/shared/assets";
import { Card, CardDescription, CardTitle } from "@/shared/ui/card";

import { useSubmit } from "../context/submit-context";

const Message = () => {
  return (
    <div className="space-y-200 text-center">
      <CardTitle className="typo-1">Thank you!</CardTitle>
      <CardDescription className="typo-4-regular text-grey-500">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </CardDescription>
    </div>
  );
};

const Submitted = () => {
  const { submittedRating } = useSubmit();
  return (
    <Card className="scroll-px-sm-300-to-md-400 py-sm-400-to-md-500 space-y-sm-300-to-md-400 flex flex-col items-center">
      <Image
        src={iconThankYou}
        alt="thank you"
        width={100}
        height={100}
        className="w-fit"
      />
      <p className="bg-grey-900 tablet:typo-4-regular typo-5-regular mx-auto w-fit rounded-[22.5px] px-200 text-orange-500">
        You selected {submittedRating} out of 5
      </p>
      <Message />
    </Card>
  );
};

export default Submitted;
