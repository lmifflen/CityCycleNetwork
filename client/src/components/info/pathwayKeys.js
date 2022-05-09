import EastVillageCyclepath from '../../images/EastVillageCyclepath.jpg';
import FortCalgary_1 from "../../images/FortCalgary_1.jpg";
import BowRiverPathwaySE from "../../images/BowRiverPathwaySE.jpg";
import PeaceBridge from "../../images/PeaceBridge.jpg";
import BowCyclepath from "../../images/BowCyclepath.jpg";
import LouiseBridge from "../../images/LouiseBridge.jpg";
import EdgemontBLVD from "../../images/EdgemontBLVD.png";
import EdgemontRavine from "../../images/EdgemontRavine.jpg";
import NorthGlenmore from "../../images/NorthGlenmore.jpg";
import ElbowRiver from "../../images/ElbowRiver.jpg";
import GreenwayNorth  from "../../images/GreenwayNorth.jpg";
import GreenwaySouth from "../../images/GreenwaySouth.jpg";
import GreenwayConNorth from "../../images/GreenwayConNorth.png";
import GreenwayConSouth from "../../images/GreenwayConSouth.png";
import HuntHills from "../../images/HuntHills.png";
import NoseCreek from "../../images/NoseCreek.jpg";
import NoseHillPark from "../../images/NoseHillPark.jpg";
import WesternHeadworks from "../../images/WesternHeadworks.jpg";
import Heritage from "../../images/Heritage.png";
import DTCycleNetwork from "../../images/DTCycleNetwork.jpg";
import VarsityRavine from "../../images/VarsityRavine.webp";
import WestNoseCreek from "../../images/WestNoseCreek.jpg";
import TwelveMileCoulee from "../../images/TwelveMileCoulee.jpg";
import TrackCrossing from "../../images/TrackCrossing.png";
import FiftyThirdStreetNW from "../../images/FiftyThirdStreetNW.png";
import Inglewood from "../../images/Inglewood.jpg";
import FishCreek from "../../images/FishCreek.jpg";
import BowmontPark from "../../images/BowmontPark.jpg";



const info = {
    BowRiverValleyPathwayNE: {
      name: "Bow River Valley Pathway NE",
      description:
        "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
        image: <img className="img" src={BowCyclepath} alt="" />
    },
    BowRiverValleyPathwaySE: {
      name: "Bow River Valley Pathway SE",
      description:
        "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
        image: <img className="img" src={BowRiverPathwaySE} alt="" />
        
    },
    BowRiverN: {
      name: "Bow River N",
      description:
        "The Bow River Pathway is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River N provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
        image: <img className="img" src={PeaceBridge} alt="" />
    },
    BowRiverValleyPathway: {
      name: "Bow River Valley Pathway",
      description:
        "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
        image: <img className="img" src={LouiseBridge} alt="" />
    },
    BowRiverValleyPathwayS: {
      name: "Bow River Valley Pathway S",
      description:
        "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
      image: <img className="img" src={EastVillageCyclepath} alt="" />
    },
    BowRiverCycleBridges: {
      name: "Bow River Cycle Bridges",
      description:
        "The Bow River Pathway system is a part of Calgary's regional pathway system - running from the Bears Paw Dam in the northwest of the city all the way the to eastern edge of Fish Creek Provincial Park in the south east of the city.  The Bow River Pathway provides approximately 48 kilometers of paved pathway often running along both edges of the Bow River. There are sections of the pathway that are shared with pedestirains and some sections that are dedicated for cyclists. There are a myriad of bridge crossings with dedicated cyclelanes providing ways to make loops of any desired length. Highlights along the pathway include views of the city skyline, the Bow River, mountain scape, and Fish Creek Provincial Park.",
      image: <img className="img" src={PeaceBridge} alt="" />
    },
    EdgemontBLVD: {
      name: "Edgemont Boulevard",
      description:
        "Edgemont Boulavard provides ways to to connect Nose Hill Park to the Bow River Pathway system via the Dalhousie and Varsity neighborhood pathways, or to the Greenway North via the Edgemont Ravine pathway and the Nose Creek Pathway. Edgemont Boulavard cyclepath is raised and sepereated from the roadway.",
      image: <img className="img" src={EdgemontBLVD} alt="" />
    },
    EdgemontRavineConnection: {
      name: "Edgemont Ravine Connection",
      description:
        "The Edgemont Ravine cyclepath is paved cyclepath that can be used to connece the Nose Creek Pathway with Nose Creek Park via Edgemont BLVD. This is a beautiful network of pathways through ravines that are entirely separated from the main road system and surrounded byt the community of Edgemont.",
      image: <img className="img" src={EdgemontRavine} alt="" />
    },
    ElbowRiverPathway: {
      name: "Elbow River Pathway",
      description:
        "The Elbow River Pathway is a part of Calgary's regional pathway system - running from the Bow River in the city centre to the Glenmore Reservoir in the Southwest of the city. Approximatly 10 kilometers long and predominatly seperated ashfault pathway through connecting parks; it passes the historic stampede grounds, Lindsey Park, and Sandy Beach.",
      image: <img className="img" src={ElbowRiver} alt="" />
    },
    FortCalgary: {
      name: "Fort Calgary",
      description:
        " Fort Calgary is the located at the confluence of the Bow River and the Elbow River. Historically it was an outpost for the Northwest Mounted Police. Located in the east village, the pathways serve as a connection between the downtown cycle network and the Bow river pathway.",
      image: <img className="img" src={FortCalgary_1} alt="" />
    },
    GlenmoreReservoirPathway: {
      name: "Glenmore Reservoir Pathway",
      description:
        "The Glenmore Reservoir Pathway is a part of Calgary's regional pathway system - partially included in the elbow river pathway, and the regional greenway. This pathway wraps around the glenmore reservoir providing access to both the North and South Glenmore parks, beautiful views of the reservoir and the mountains to the west.",
      image: <img className="img" src={NorthGlenmore} alt="" />
    },
    GreenwayNorth: {
      name: "Greenway North",
      description:
        "The Rotary/Mattamy Greenway links parks, natural areas, greenspaces, river valleys and citizens. The Rotary/Mattamy Greenway is a 145km urban pathway system that encircles the entire City of Calgary. This major pathway transportation network serves Calgarians by providing a connected system throughout 55 communities around Calgary and also connects with almost 1000km of existing pathways. Highlights in the North part of the system include sections of the Bow River Pathway, and 12 Mile Coulee. In the South sections go along the Glenmore Reservoir, through Fish Creek Provincial Park, and along the Bow River Pathway. Some sections along the eastern side of the city feel much more urban running as raised cycle paths along a busy road.",
      image: <img className="img" src={GreenwayNorth} alt="" />
    },
    GreenwaySouth: {
      name: "Greenway South",
      description:
        "The Rotary/Mattamy Greenway links parks, natural areas, greenspaces, river valleys and citizens. The Rotary/Mattamy Greenway is a 145km urban pathway system that encircles the entire City of Calgary. This major pathway transportation network serves Calgarians by providing a connected system throughout 55 communities around Calgary and also connects with almost 1000km of existing pathways. Highlights in the North part of the system include sections of the Bow River Pathway, and 12 Mile Coulee. In the South sections go along the Glenmore Reservoir, through Fish Creek Provincial Park, and along the Bow River Pathway. Some sections along the eastern side of the city feel much more urban running as raised cycle paths along a busy road.",
      image: <img className="img" src={GreenwaySouth} alt="" />
    },
    NoseCreekNoseHillCon: {
      name: "Nose Creek Nose Hill Connection",
      description:
        "This section of pathway connects the Nose Creek Pathway with the Nose Hill Pathway. Generally along a greenway there is a short section through a subdivision.",
      image: <img className="img" src={HuntHills} alt="" />
    },
    NoseCreekPathway: {
      name: "Nose Creek Pathway",
      description:
        "The Nose Creek Pathway is a part of Calgary's regional pathway system and the Trans-Canada trail - running from the Bow River in the city centre North to the West Nose Creek Park following greenway along the Nose Creek.",
        image: <img className="img" src={NoseCreek} alt="" />
    },
    NoseHillPark: {
        name: "Nose Hill Park",
        description: "Nose hill park is a large park in the north of the city. It is a popular destination for cyclists and is a great place to watch the city skyline.",
        image: <img className="img" src={NoseHillPark} alt="" />
    },
    WesternHeadworksCanalPathway: {
      name: "Western Headworks Canal Pathway",
      description: "The Western Headworks Canal Pathway is a part of Calgary's regional pathway system - running alongside the Western Headworks main canal from the Max Bell Centre all the way to Chestermere - a distance of 25km. This pathway will take you through the industrial heartland of the city.",
      image: <img className="img" src={WesternHeadworks} alt="" />
    },
    WesternHeadworksCanalPathwayN: {
      name: "Western Headworks Canal Pathway",
      description: "The Western Headworks Canal Pathway is a part of Calgary's regional pathway system - running alongside the Western Headworks main canal from the Max Bell Centre all the way to Chestermere. This pathway will take you through the industrial heartland of the city.",
      image: <img className="img" src={WesternHeadworks} alt="" />
    },
    GreenwayConnectionNorth: {
      name: "Greenway Connection North",
      description: "This is a short section of the regional Greenway that connects that the rider needs to cycle along the street - there is no cyclepath here.",
      image: <img className="img" src={GreenwayConNorth} alt="" />
      
    },
    GreenwayConnectionSouth: {
      name: "Greenway Connection South",
      description: "This is a short section of the regional Greenway that connects that the rider needs to cycle along the street - there is no cyclepath here.",
      image: <img className="img" src={GreenwayConSouth} alt="" />
    },
    PumphousePark: {
      name: "Pumphouse Park",
      description: "Pumphouse park is a small park with cyclepaths on the west side of downtown. It is useful for connecting to the downtown cycle network from the Bow River Pathway.",
      image: <img className="img" src={BowCyclepath} alt="" />
    },
    Heritage: {
      name: "Heritage Cycletrack",
      description: "A raised cycletrack running along Heritage drive from the Bow River Pathway to the Glenmore Reservoir Pathway. It is a great way to connect eastern and western sections of the regional pathways.",
      image: <img className="img" src={Heritage} alt="" />
    },
    DalhousieToBowRiver: {
      name: "Dalhousie - Bow River Connection",
      description: "This is a section of greenway through the communities of Dalhousie and Varsity. It is great for connecting Nose Hill Park and the Bow River Pathway. There is a connection needed along 53rd St NW to connect the two areas.",
      image: <img className="img" src={VarsityRavine} alt="" />
    },
    NoseCreekToGreenway: {
      name: "Nose Creek - Greenway Connection",
      description: "This is a a section of greenway that follows West Nose Creek through Nose Creek Park, and through the communities od Country Hills and Evanston.",
      image: <img className="img" src={WestNoseCreek} alt="" />
    },
    TwelveMileCoulee: {
      name: "12 Mile Coulee",
      description: "Twelve Mile Coulee is in the northwest portion of the city and was established in 2001. The coulee and nearby road were originally named this because they were approximately 12 miles from the post office in Fort Calgary and the area served as a mail drop on the old stagecoach run to Cochrane. The Cyclepath runs through the coulee and along an elevated cycletrack adjaccent to Tuscany Boulevard. ",
      image: <img className="img" src={TwelveMileCoulee} alt="" />
    },
    PumphouseParkToCycleTrack: {
      name: "Pumphouse Park - Cycle Track Connection",
      description: "This is a connection between the Bow River Pathway and the Downtown Cycle Track. Rider must cross over the rail tracks.",
      image: <img className="img" src={TrackCrossing} alt="" />
    },
    FiftyThirdStreetNW: {
      name: "53rd Street NW",
      description: "A section of septerated cyclepath along 53rd St NW. It is a good way to connect the greenways between the Bow River Pathway and Nose Hill Park.",
      image: <img className="img" src={FiftyThirdStreetNW} alt="" />
    },
    BowRiverToInglewood: {
      name: "Bow River - Inglwood Connection",
      description: "This is a section of seperated Cycleway through Saint Patrick's Island, Inglewood, and Ramsey. It is a great way to connect different side of the Bow River Pathway, or to access amenities in the communites of Inglewood and Ramsey like breweries or cafes.",
      image: <img className="img" src={Inglewood} alt="" />
    },
    DTCycleNetwork: {
      name: "Downtown Cycle Track",
      description: "The downtown cycle track is a great way to connect the downtown area to the regional pathways. Access to historic Stephen Ave and all the ameninties of downtown Calgary, the Beltline, and the East End make this a must include when looking for après cycle locations.",
      image: <img className="img" src={DTCycleNetwork} alt="" />
    },
     
  };

  export default info;