"use client";

import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import RateSelector from "@/shared/ui/rate-selector";
import StarIcon from "@/shared/ui/star-icon";

import { useRatingForm, UseRatingFormType } from "../hooks/use-rating-form";

type RateSelectorListProps = {
  onClick: (rate: number) => void;
  selectedRate?: number;
  error: string;
};
const RateSelectorList = ({
  onClick,
  selectedRate,
  error,
}: RateSelectorListProps) => {
  return (
    <>
      <div
        className="flex justify-between"
        role="radiogroup"
        arial-label="Rating selector"
      >
        {Array.from({ length: 5 }, (_, num) => {
          const rate = num + 1;
          return (
            <button
              onClick={() => onClick(rate)}
              key={rate}
              role="radio"
              type="button"
              aria-checked={selectedRate === rate}
              aria-label={`rate ${selectedRate} points`}
            >
              <RateSelector
                className="size-[clamp(2.625rem,2.088rem+2.29vw,3.188rem)]"
                num={rate}
                isSelect={selectedRate === rate}
              />
            </button>
          );
        })}
      </div>
      {error && <p>{error}</p>}
    </>
  );
};

type RatingFormProps = {
  children: (props: UseRatingFormType) => React.ReactNode;
};
const RatingForm = ({ children }: RatingFormProps) => {
  const props = useRatingForm();

  return children(props);
};

const InteractiveRatingCard = () => {
  return (
    <Card className="space-y-sm-300-to-md-400 w-full">
      <CardHeader>
        <StarIcon />
      </CardHeader>
      <CardContent className="space-y-200">
        <CardTitle className="typo-2 text-[clamp(1.5rem,1.261rem+1.02vw,1.75rem)] leading-[clamp(1.875rem,1.577rem+1.27vw,2.188rem)] text-white">
          How did we do?
        </CardTitle>
        <CardDescription className="typo-5-regular tablet:typo-4-regular">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </CardDescription>
        <RatingForm>
          {(props) => (
            <form className="space-y-sm-300-to-md-400" action={props.onSubmit}>
              <RateSelectorList
                onClick={props.changeSelectedButton}
                selectedRate={props.formState.rating}
                error={props.error}
              />
              <Button className="w-full" type="submit">
                submit
              </Button>
            </form>
          )}
        </RatingForm>
      </CardContent>
    </Card>
  );
};

export default InteractiveRatingCard;
