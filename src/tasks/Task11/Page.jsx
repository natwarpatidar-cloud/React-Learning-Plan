import { useContextSelector } from "use-context-selector";
import Email from "./Email";
import Name from "./Name";
import UserContext from "./UserContext";

export default function Page() {
    const username = useContextSelector(
        UserContext,
        state => state.user.username
    );

    const email = useContextSelector(
        UserContext,
        state => state.user.email
    );

    return (
        <div className="w-full flex items-center mt-12 flex-col gap-6">
            <div className="w-[200px] h-[200px] shadow-2xl rounded-full flex flex-col gap-2 justify-center items-center">
                <p>{username}</p>
                <p>{email}</p>
            </div>
            <Name />
        </div>
    );
}
