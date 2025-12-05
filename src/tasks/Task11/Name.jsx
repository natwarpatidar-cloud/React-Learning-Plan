import React, { useState } from "react";
import { useContextSelector } from "use-context-selector";
import UserContext from "./UserContext";

function Name() {
    console.log("Name-rerendered");

    const [name, setName] = useState("");

    const setUser = useContextSelector(
        UserContext,
        state => state.setUser
    );

    const handleClick = () => {
        setUser(prev => ({ ...prev, username: name }));
        setName("");
    };

    return (
        <div className="space-x-2">
            <input
                type="text"
                onChange={e => setName(e.target.value)}
                placeholder="Enter name..."
                className="border p-4 rounded-2xl"
                value={name}
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

export default React.memo(Name);
