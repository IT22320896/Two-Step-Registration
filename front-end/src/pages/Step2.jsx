import { Button } from "../components/Button";
import InputField from "../components/InputField";

export default function Step2({
  data,
  errors,
  onChange,
  onBack,
  onSubmit,
  loading,
}) {
  const isValid = data.password.length >= 6;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Security</h2>

      <InputField
        label="Password"
        name="password"
        type="password"
        value={data.password}
        onChange={onChange}
        error={errors.password}
        required
      />

      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={data.confirmPassword}
        onChange={onChange}
        error={errors.confirmPassword}
        required
      />

      <div className="flex justify-between">
        <Button
          onClick={onBack}
          className={"px-4 py-2 border rounded hover:bg-gray-100"}
        >
          Back
        </Button>

        <Button
          onClick={onSubmit}
          disabled={!isValid}
          loading={loading}
          className={`px-4 py-2 rounded text-white ${
            isValid
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
