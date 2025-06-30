import { z } from "zod";

const FormSchema = z.object({
  rating: z.number({
    required_error: "rate is required",
  }),
});

type FormInput = z.infer<typeof FormSchema>;

export { FormSchema, type FormInput };
