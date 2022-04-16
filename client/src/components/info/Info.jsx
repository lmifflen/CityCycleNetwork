import info from "./pathwayInfo";

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
