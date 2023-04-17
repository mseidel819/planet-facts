import Image from "next/image";

const MainContent = ({ data }) => {
  return (
    <div className="dynamicContentContainer">
      <div>
        {/* <img src={planetObj.images.planet} /> */}
        <Image
          alt="mercury"
          width="400"
          height="400"
          src={data.images.planet}
        />
      </div>
      <div>
        <h1>{data.name}</h1>
        <p>{data.overview.content}</p>
        <p>
          Source:
          <a href={data.overview.source}>{data.overview.source}</a>
        </p>
      </div>
    </div>
  );
};
export default MainContent;
