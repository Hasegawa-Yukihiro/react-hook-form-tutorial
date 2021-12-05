import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./type";

export const useHooks = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return {
    register,
    handleSubmit,
    watch,
    onSubmit,
    formState: { errors },
  };
};
