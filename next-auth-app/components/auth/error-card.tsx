import { Header } from "./header";
import { BackButton } from "./back-button";
import { Card, CardHeader, CardFooter } from "../ui/card";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
    return (
        <CardWrapper
        headerLabel="Ooops! Something went wrong!"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
        >
         <ExclamationTriangleIcon className="m-auto w-6 h-7 text-yellow-400"/>
        </CardWrapper>
    )
};