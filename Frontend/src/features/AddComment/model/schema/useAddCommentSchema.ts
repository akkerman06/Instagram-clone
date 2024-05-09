import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export enum AddCommentNames {
  CONTENT = "content",
}

export interface AddCommentValues {
  content: string;
}

export const useAddCommentSchema = () => {
  const schema = yup.object().shape({
    content: yup
      .string()
      .required("Поле не может быть пустым")
      .min(1, "Минимум 1 симв")
      .max(40, "Максимум 40 симв"),
  });

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<Partial<AddCommentValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      content: "",
    },
  });

  return {
    register,
    watch,
    reset,
    handleSubmit,
    isValid,
    errors,
    isSubmitting,
  };
};
