import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./type";

export const useHooks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => console.log(data),
    []
  );

  return {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
  };
};
