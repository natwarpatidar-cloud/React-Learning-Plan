import { memo } from "react";

export const ListItem = memo(function ({ image, fullname, phone }) {
    console.log("List item rendered");
    return (
        <div className="w-[250px] border rounded-3xl shadow-blue-900">
            <img src={image} className="w-full h-[200px] rounded-t-3xl" />
            <div className="py-4 px-2">
                <p className="font-semibold">{fullname}</p>
                <p className="text-gray-600">{phone}</p>
            </div>
        </div>
    )
});