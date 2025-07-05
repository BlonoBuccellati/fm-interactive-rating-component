"use client";
import { useState } from "react";

import { SubmitContext } from "../context/submit-context";

import InteractiveRatingCard from "./interactive-rating-card";
import Submitted from "./submitted";

const InteractiveRatingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRating, setSubmittedRating] = useState<number | undefined>(
    undefined,
  );
  const handleSuccess = (rating: number) => {
    setSubmittedRating(rating);
    setIsSubmitted(true);
  };
  return (
    <div className="flex min-h-screen items-center">
      <SubmitContext.Provider
        value={{ onSubmitSuccess: handleSuccess, submittedRating }}
      >
        {!isSubmitted ? <InteractiveRatingCard /> : <Submitted />}
      </SubmitContext.Provider>
    </div>
  );
};

export default InteractiveRatingPage;
