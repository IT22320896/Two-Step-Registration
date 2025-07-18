import { Button } from "../components/Button";

export default function Step1({ data, errors, onChange, onNext }) {
  const isValid =
    data.fullName.trim() !== "" && /\S+@\S+\.\S+/.test(data.email);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      <label className="block mb-3">
        Full Name *
        <input
          name="fullName"
          type="text"
          value={data.fullName}
          onChange={onChange}
          className={`w-full p-2 border rounded ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
        )}
      </label>

      <label className="block mb-3">
        Email *
        <input
          name="email"
          type="email"
          value={data.email}
          onChange={onChange}
          className={`w-full p-2 border rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </label>

      <label className="block mb-5">
        Phone Number (Optional)
        <input
          name="phone"
          type="tel"
          value={data.phone}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>

      <Button
        onClick={onNext}
        disabled={!isValid}
        className={`w-full py-2 rounded text-white ${
          isValid
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Next
      </Button>
    </div>
  );
}
