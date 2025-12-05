import { useState } from "react";

const List = ({ items, renderListItem }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div>
            {items.map((item, index) => {
                const highLightedText = index === selectedIndex
                renderListItem(item, highLightedText)
            })}
        </div>
    )
}

export default List;