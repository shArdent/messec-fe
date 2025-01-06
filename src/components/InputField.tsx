import { FormFieldProps } from "../types";

const InputField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  register,
  error,
  name,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold flex justify-between">
        {label}{" "}
        {error && <span className="text-red-500 mt-1">{error.message}</span>}
      </label>
      <input
        className="h-10 w-full px-2 border-2 border-slate-400 focus:ring-0 focus:outline-none focus:border-slate-500 rounded-lg"
        type={type}
        id={id}
        {...register(name)}
      />
    </div>
  );
};

export default InputField;
