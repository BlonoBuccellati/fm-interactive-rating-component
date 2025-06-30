import { createContext, useContext } from "react";

type SubmitContextType = {
  onSubmitSuccess: (rating: number) => void;
  submittedRating?: number;
};

const SubmitContext = createContext<SubmitContextType>({
  onSubmitSuccess: () => {},
  submittedRating: undefined,
});

const useSubmit = () => {
  const ctx = useContext(SubmitContext);
  if (!ctx) throw new Error("SubmitContextの外でuseSubmit()は呼び出せません");
  return ctx;
};

export { useSubmit, SubmitContext };
