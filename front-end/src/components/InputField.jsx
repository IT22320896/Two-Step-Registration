const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  optional = false,
}) => {
  return (
    <label className="block mb-4">
      {label}
      {required && " *"}
      {optional && " (Optional)"}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded mt-1 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </label>
  );
};

export default InputField;
