"use client";
import { useState } from "react";

import { SubmitContext } from "../context/submit-context";

import InteractiveRatingCard from "./interactive-rating-card";
import PageLayout from "./page-layout";
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
    <PageLayout>
      <SubmitContext.Provider
        value={{ onSubmitSuccess: handleSuccess, submittedRating }}
      >
        {!isSubmitted ? <InteractiveRatingCard /> : <Submitted />}
      </SubmitContext.Provider>
    </PageLayout>
  );
};

export default InteractiveRatingPage;
