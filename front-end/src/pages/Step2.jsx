import { Button } from "../components/Button";

export default function Step2({
  data,
  errors,
  onChange,
  onBack,
  onSubmit,
  loading,
}) {
  const isValid =
    data.password.length >= 6 && data.confirmPassword === data.password;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Security</h2>

      <label className="block mb-3">
        Password *
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={onChange}
          className={`w-full p-2 border rounded ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.password && (
          <p className="text-red-600 text-sm mt-1">{errors.password}</p>
        )}
      </label>

      <label className="block mb-5">
        Confirm Password *
        <input
          name="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={onChange}
          className={`w-full p-2 border rounded ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </label>

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
