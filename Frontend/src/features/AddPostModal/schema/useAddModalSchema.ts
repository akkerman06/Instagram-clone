import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export enum AddModalFormNames {
  CONTENT = "content",
}

export interface AddModalFormValues {
  content: string;
}

export const useAddModalFormSchema = () => {
  const schema = yup.object().shape({
    content: yup
      .string()
      .required("Поле не может быть пустым")
      .min(30, "Минимум 30 симв")
      .max(200, "Максимум 200 симв"),
  });

  const {
    register,
    watch,
    reset,
    handleSubmit,
    setValue,
    formState: { isValid, errors, isSubmitting },
  } = useForm<Partial<AddModalFormValues>>({
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
    setValue,
    handleSubmit,
    isValid,
    errors,
    isSubmitting,
  };
};
