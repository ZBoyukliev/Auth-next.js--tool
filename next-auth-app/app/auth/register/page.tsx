import { RegisterForm } from "@/components/auth/register-form";
import { Suspense } from "react";

const RegisterPage = () => {
  return (
    <Suspense fallback={<div>Loading verification form...</div>}>
      <RegisterForm />
    </Suspense>
  )
}

export default RegisterPage;