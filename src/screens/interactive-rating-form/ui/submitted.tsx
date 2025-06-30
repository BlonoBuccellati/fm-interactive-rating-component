"use client";

import Image from "next/image";

import { iconThankYou } from "@/shared/assets";
import { Card } from "@/shared/ui/card";

import { useSubmit } from "../context/submit-context";

import PageLayout from "./page-layout";

const Submitted = () => {
  const { submittedRating } = useSubmit();
  return (
    <PageLayout>
      <Card className="flex flex-col items-center space-y-300 px-300 py-400">
        <Image
          src={iconThankYou}
          alt=""
          width={100}
          height={100}
          className="w-fit"
        />
        <div className="space-y-300 text-center">
          <p className="bg-grey-900 typo-4-regular mx-auto w-fit rounded-[22.5px] px-200 text-orange-500">
            You selected {submittedRating} out of 5
          </p>
          <p className="typo-1">Thank you!</p>
          <p className="typo-4-regular text-grey-500">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </Card>
    </PageLayout>
  );
};

export default Submitted;
