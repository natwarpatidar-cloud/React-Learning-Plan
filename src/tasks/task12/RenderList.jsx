import List from "./List";

const Items = Array.from({ length: 20 }, (_, i) => i).map(e => ({ name: `Item-${e}` }));
console.log(Items);


const RenderList = () => {

    const renderListItem = (item, highLightedText) => {
        return (
            <div>
                { highLightedText ? <p>{item.name}</p> : <p>{item.name}</p> }
            </div>
        )
    }

    return (
        <List items={Items} renderListItem={renderListItem} />
    )
}

export default RenderList;