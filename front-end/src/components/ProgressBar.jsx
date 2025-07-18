export default function ProgressBar({ step, total }) {
  const percent = (step / total) * 100;
  return (
    <div className="mb-6">
      <div className="h-2 bg-gray-300 rounded">
        <div
          className="h-2 bg-blue-600 rounded transition-all duration-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-right text-sm mt-1">
        Step {step} of {total}
      </p>
    </div>
  );
}
