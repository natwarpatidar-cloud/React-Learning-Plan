import { FixedSizeList } from "react-window";

const list = Array.from({ length: 10000 }, (_, i) => ({
    title: `List ${i + 1}`,
    description: `This is list item ${i + 1}`
}));

export const VirtualizedList = () => {
    return (
        <FixedSizeList
            height={800}
            itemCount={list.length}
            itemSize={80}
            itemData={list}
        >
            {({ index, style, data }) => (
                <div style={style}>
                    <ListItem index={index} data={data} />
                </div>
            )}
        </FixedSizeList>
    );
};

export const ListItem = ({ index, data }) => {
    const item = data[index]; // ✅ Access data via index
    return (
        <li
            key={item.title}
            className="p-2 border border-black rounded-2xl bg-black/20"
        >
            <p>{item.title}</p>
            <p>{item.description}</p>
        </li>
    );
};
