"use client"

import { useSearchParams } from "next/navigation"
import { CardWrapper } from "./card-wrapper"
import { BeatLoader } from "react-spinners"
import { useCallback, useEffect } from "react"

const NewVerificationForm = () => {
    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const onSubmit = useCallback(() => {
        console.log(token)
    }, [token])

    useEffect(() => {
        onSubmit()
    },[onSubmit])

    return (
      <CardWrapper
      headerLabel="Confirm your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      >
        <div className="flex items-center w-full justify-center">
        <BeatLoader/>
        </div>
      </CardWrapper>
    )
  }
  
  export default NewVerificationForm