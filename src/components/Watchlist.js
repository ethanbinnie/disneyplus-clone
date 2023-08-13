import Collection from "./Collectionvid"

export default function Watchlist() {
    return (
        <div className="watchlist">
            <h1 className="watchlistHeader">Watchlist</h1>
            <h3 className="watchlistText">My Movies & Series</h3>
            <div className="watchlistVideos">
                <Collection image="./images/familyguy.jpeg"/>
                <Collection image="./images/narnia.jpeg"/>
                <Collection image="./images/junglecruise.jpeg"/>
                <Collection image="./images/lokiseries.jpeg"/>
            </div>
            
        </div>
    )
}