import { useState } from "react";

import { useSubmit } from "../context/submit-context";
import { FormInput, FormSchema } from "../lib/schema";
type ApiResponse<T> = {
  message: string;
  data: T;
};
type Post = {
  rating: number;
};

export const useRatingForm = () => {
  const { onSubmitSuccess } = useSubmit();
  type FormInputState = Partial<FormInput>;
  const [formState, setFormState] = useState<FormInputState>({});
  const [error, setError] = useState("");
  const changeSelectedButton = (rate: number) => {
    setError("");
    setFormState({ rating: rate });
  };
  const onSubmit = async () => {
    setError("");
    const result = FormSchema.safeParse(formState);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    try {
      const res = await fetch("api/rate", {
        method: "POST",
        body: JSON.stringify(formState),
      });
      if (!res.ok) {
        alert(res.status);
      }
      const json = (await res.json()) as ApiResponse<Post>;
      onSubmitSuccess(json.data.rating);
    } catch (error) {
      console.log(error);
      alert("failed submit");
    }
  };

  return { error, onSubmit, changeSelectedButton, formState };
};

export type UseRatingFormType = ReturnType<typeof useRatingForm>;
