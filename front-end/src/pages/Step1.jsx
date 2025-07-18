import { Button } from "../components/Button";
import InputField from "../components/InputField";

export default function Step1({ data, errors, onChange, onNext }) {
  const isValid =
    data.fullName.trim() !== "" && /\S+@\S+\.\S+/.test(data.email);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      <InputField
        label="Full Name"
        name="fullName"
        value={data.fullName}
        onChange={onChange}
        error={errors.fullName}
        required
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        value={data.email}
        onChange={onChange}
        error={errors.email}
        required
      />

      <InputField
        label="Phone Number"
        name="phone"
        type="tel"
        value={data.phone}
        onChange={onChange}
        optional
      />

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
