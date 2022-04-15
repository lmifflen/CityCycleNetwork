const info = {
    BowRiverValleyPathwayNE: {
        name: "Bow River Valley Pathway NE",
        description: "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
    },
    BowRiverValleyPathwaySE: {
        name: "Bow River Valley Pathway SE",
        description: "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
    },
    BowRiverN: {
        name: "Bow River N",
        description: "The Bow River Pathway is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River N provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
    },
    BowRiverValleyPathway: {
        name: "Bow River Valley Pathway",
        description: "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
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