import Collection from "./Collectionvid"

export default function Search() {
    return (
        <div className="search">
            <input type="text" placeholder="Search by title, character, or genre" className="searchbar"/>
            <h1 className="searchText">Explore</h1>
            <div className="searchCollection">
                <Collection image="./images/guardianscollection.png"/>
                <Collection image="./images/realitycollection.png"/>
                <Collection image="./images/suspensecollection.png"/>
                <Collection image="./images/disney100collection.png"/>
                <Collection image="./images/ausnzcollection.png"/>
                <Collection image="./images/infinitysagacollection.png"/>
                <Collection image="./images/actioncollection.png"/>
                <Collection image="./images/indianajonescollection.png"/>
                <Collection image="./images/spidermancollection.png"/>
                <Collection image="./images/simpsonscollection.png"/>
                <Collection image="./images/animecollection.png"/>
                <Collection image="./images/adultcollection.png"/>
                <Collection image="./images/starwarscollection.png"/>
                <Collection image="./images/mickeymousecollection.png"/>
                <Collection image="./images/disneychannelcollection.png"/>
                <Collection image="./images/disneyjuniorcollection.png"/>
            </div>
        </div>
    )
}