import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./pages/Step1";

export default function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateStep1 = () => {
    const errs = {};
    if (!data.fullName.trim()) errs.fullName = "Full Name required";
    if (!data.email.trim()) errs.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(data.email)) errs.email = "Email invalid";
    return errs;
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors({});
  };

  const handleNext = () => {
    const errs = validateStep1();
    if (Object.keys(errs).length === 0) setStep(2);
    else setErrors(errs);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <ProgressBar step={step} total={2} />
      {step === 1 && (
        <Step1
          data={data}
          errors={errors}
          onChange={handleChange}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
