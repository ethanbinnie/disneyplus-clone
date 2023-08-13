import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Collection from "./Collectionvid";

export default function Series() {
  return (
    <div>
      <div>
        <div className="textContainer">
          <h1 className="moviesText">Series</h1>
          <div className="featured">
            <p>Featured</p>
            <ChevronDownIcon width={20} height={20} />
          </div>
        </div>
        <div className="seriesVideos">
            <Collection image="./images/bear.jpeg"/>
            <Collection image="./images/saint.jpeg"/>
            <Collection image="./images/familyguy.jpeg"/>
            <Collection image="./images/edsheeran.jpeg"/>
            <Collection image="./images/elephants.jpeg"/>
            <Collection image="./images/hsm.jpeg"/>
            <Collection image="./images/lokiseries.jpeg"/>
            <Collection image="./images/cleveland.jpeg"/>
            <Collection image="./images/americandad.jpeg"/>
            <Collection image="./images/howimet.jpeg"/>
            <Collection image="./images/futurama.jpeg"/>
            <Collection image="./images/obiwan.jpeg"/>
            <Collection image="./images/simpsonsseries.jpeg"/>
            <Collection image="./images/matildas.jpeg"/>
            <Collection image="./images/alwayssunny.jpeg"/>
            <Collection image="./images/moonknight.jpeg"/>
            <Collection image="./images/mandalorian.jpeg"/>
            <Collection image="./images/atlanta.jpeg"/>
            <Collection image="./images/bobburger.jpeg"/>
            <Collection image="./images/classof9.jpeg"/>
        </div>
      </div>
    </div>
  );
}
