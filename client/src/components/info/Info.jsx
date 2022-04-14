const info = {
    BowRiverValleyPathwayNE: {
        name: "Bow River Valley Pathway NE",
        description: "this is a pathway"
    }

}
const Info = (props) => {
    const {feature} = props;

    const matchingKey = Object.keys(info).find(key => {
        return feature.some(vector => {return vector.sourceLayer === key});
    }) 
    if (!matchingKey) {
        return <div>No Path</div>;
    }

    const matchingInfo = info[matchingKey];


    return <div>{matchingInfo.name}</div>
}

export default Info;