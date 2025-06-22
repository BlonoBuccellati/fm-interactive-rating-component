import { Button } from "@/shared/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import RateSelector from "@/shared/ui/rate-selector";
import StarIcon from "@/shared/ui/star-icon";

const RateSelectorList = () => {
  return (
    <div className="flex space-x-200">
      {Array.from({ length: 5 }, (_, num) => (
        <RateSelector
          key={num}
          className="size-[42px]"
          num={num}
          isSelect={true}
        />
      ))}
    </div>
  );
};

const InteractiveRatingCard = () => {
  return (
    <Card className="w-full space-y-300">
      <CardHeader>
        <StarIcon />
      </CardHeader>
      <CardContent className="space-y-200">
        <CardTitle className="typo-2 text-white">How did we do?</CardTitle>
        <CardDescription className="typo-5-regular">
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </CardDescription>
        <RateSelectorList />
      </CardContent>
      <CardAction>
        <Button className="w-full">submit</Button>
      </CardAction>
    </Card>
  );
};

export default InteractiveRatingCard;
