import { ChevronDownIcon } from "@heroicons/react/24/solid"
import Collection from "./Collectionvid"


export default function Movies() {
    return (
        <div className="movies">
            <div className="textContainer">
                <h1 className="moviesText">Movies</h1>
                <div className="featured">
                    <p>Featured</p>
                    <ChevronDownIcon width={20} height={20}/>
                </div>
            </div>
            <div className="moviesVideos">
                <Collection image="./images/indianajones.jpeg"/>
                <Collection image="./images/avengers.jpeg"/>
                <Collection image="./images/eternals.jpeg"/>
                <Collection image="./images/daredevilmovie.jpeg"/>
                <Collection image="./images/avatar.jpeg"/>
                <Collection image="./images/freeguy.jpeg"/>
                <Collection image="./images/guardians.jpeg"/>
                <Collection image="./images/junglecruise.jpeg"/>
                <Collection image="./images/dude.jpeg"/>
                <Collection image="./images/narnia.jpeg"/>
                <Collection image="./images/rio.jpeg"/>
                <Collection image="./images/whitemen.jpeg"/>
                <Collection image="./images/simpsons.jpeg"/>
                <Collection image="./images/up.jpeg"/>
                <Collection image="./images/proposal.jpeg"/>
                <Collection image="./images/mikedave.jpeg"/>
                <Collection image="./images/tarzan.jpeg"/>
                <Collection image="./images/stanlee.jpeg"/>
                <Collection image="./images/borat.jpeg"/>
                <Collection image="./images/lionking.jpeg"/>
            </div>
        </div>
    )
}