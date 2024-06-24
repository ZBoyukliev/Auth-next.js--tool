import { auth } from "@/auth.config";

const SettingsPage = async () => {
    const session = await auth();
    return(
        <div>{JSON.stringify(session)}</div>
    )
};

export default SettingsPage;