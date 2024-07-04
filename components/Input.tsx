interface InputProps {
  placeholder: string,
  type: string,
  name: string,
  required: boolean,
  errors: string[];
}

export default function Input({
  type,
  placeholder,
  name,
  required,
  errors
}: InputProps) {
  return (
    <div>
      <input
        name={name}
        className="w-full outline-none focus:ring-2 ring-1 focus:ring-indigo-300 ring-slate-300 py-2 px-4 mb-3 rounded-full"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      <span className="text-red-500 text-sm pl-4 pb-3">{errors}</span>
    </div>
  );
}
