"use client"

import { CardWrapper } from "./card-wrapper"

const NewVerificationForm = () => {
    return (
      <CardWrapper
      headerLabel="Confirm your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      >
        <div className="flex items-center w-full justify-center">

        </div>
      </CardWrapper>
    )
  }
  
  export default NewVerificationForm