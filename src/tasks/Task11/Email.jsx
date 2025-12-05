import React, { useState } from "react";
import { useContextSelector } from "use-context-selector";
import UserContext from "./UserContext";

function Email() {
    console.log("Email-rerendered");

    const [email, setEmail] = useState("");

    const setUser = useContextSelector(
        UserContext,
        state => state.setUser
    );

    const handleClick = () => {
        setUser(prev => ({ ...prev, email }));
        setEmail("");
    };

    return (
        <div className="space-x-2">
            <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter email..."
                className="border p-4 rounded-2xl"
                value={email}
            />
            <button
                type="submit"
                className="bg-black/30 p-4 rounded-2xl"
                onClick={handleClick}
            >
                Save
            </button>
        </div>
    );
}

export default React.memo(Email);
