import { memo } from "react";

export const ListItem = memo(({ index, data }) => {
    const list = data[index];
    return (
        <li key={list.title} className="p-2 border border-black rounded-2xl bg-black/20">
            <p>{list.title}</p>
            <p>{list.description}</p>
        </li>
    )
});