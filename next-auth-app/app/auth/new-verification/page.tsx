import NewVerificationForm from "@/components/auth/new-verification-form"
import { Suspense } from "react"

const NewVerificationPage = () => {
  return (
    <Suspense fallback={<div>Loading verification form...</div>}>
      <NewVerificationForm />
    </Suspense>
  )
}

export default NewVerificationPage