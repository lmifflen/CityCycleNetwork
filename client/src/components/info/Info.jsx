const info = {
  BowRiverValleyPathwayNE: {
    name: "Bow River Valley Pathway NE",
    description:
      "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
  },
  BowRiverValleyPathwaySE: {
    name: "Bow River Valley Pathway SE",
    description:
      "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
  },
  BowRiverN: {
    name: "Bow River N",
    description:
      "The Bow River Pathway is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River N provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
  },
  BowRiverValleyPathway: {
    name: "Bow River Valley Pathway",
    description:
      "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
  },
  BowRiverValleyPathwayS: {
    name: "Bow River Valley Pathway S",
    description:
      "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
  },
  BowRiverCycleBridges: {
    name: "Bow River Cycle Bridges",
    description:
      "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
  },
  EdgemontBLVD: {
    name: "Edgemont Boulevard",
    description:
      "Edgemont Boulavard provides ways to to connect Nose Hill Park to the Bow River Pathway system via the Dalhousie and Varsity neighborhood pathways, or to the Greenway North via the Edgemont Ravine pathway and the Nose Creek Pathway. Edgemont Boulavard cyclepath is raised and sepereated from the roadway.",
  },
  EdgemontRavineConnection: {
    name: "Edgemont Ravine Connection",
    description:
      "The Edgemont Ravine cyclepath is paved cyclepath that can be used to connece the Nose Creek Pathway with Nose Creek Park via Edgemon BLVD. This is a beautiful network of pathways through ravines that are entirely separated from the main road system and surrounded byt the community of Edgemont.",
  },
  ElbowRiverPathway: {
    name: "Elbow River Pathway",
    description:
      "The Elbow River Pathway is a part of Calgary's regional pathway system - running from the Bow River in the city centre to the Glenmore Reservoir in the Southwest of the city. Approximatly 10 kilometers long and predominatly seperated ashfault pathway through connecting parks; it passes the historic stampede grounds, Lindsey Park, and Sandy Beach.",
  },

};
const Info = (props) => {
  const { feature } = props;

  const matchingKey = Object.keys(info).find((key) => {
    return feature.some((vector) => {
      return vector.sourceLayer === key;
    });
  });
  if (!matchingKey) {
    return <div>No Path</div>;
  }

  const matchingInfo = info[matchingKey];

  return (
    <div>
      <div className="name">{matchingInfo.name}</div>
      <div className="description">{matchingInfo.description}</div>
    </div>
  );
};

export default Info;
