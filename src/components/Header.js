import { HomeIcon, MagnifyingGlassIcon, PlusIcon, StarIcon, FilmIcon, TvIcon } from "@heroicons/react/20/solid"


export default function Header() {

  return (
    <div className="header">
      <div className="headerSections">
        <img src="./images/disneylogo.png" alt="logo" className="headerLogo" width={125} height={40}/>
        <div className="headerGenres">
          <HomeIcon width={20} height={20} className="headerIcon"/> <p>home</p>
        </div>
        <div className="headerGenres">
          <MagnifyingGlassIcon width={20} height={20} className="headerIcon"/> <p>search</p>
        </div>  
        <div className="headerGenres">
          <PlusIcon width={20} height={20} className="headerIcon"/> <p>watchlist</p>
        </div>
        <div className="headerGenres">
          <StarIcon width={20} height={20} className="headerIcon"/> <p>originals</p>
        </div>
        <div className="headerGenres">
          <FilmIcon width={20} height={20} className="headerIcon"/> <p>movies</p>
        </div>
        <div className="headerGenres">
          <TvIcon width={20} height={20} className="headerIcon"/> <p>series</p>
        </div>
      </div>
      <div className="headerPerson">
        <p>ethan</p> <img src="./images/aladdinprofile.jpeg" alt="aladdin" className="headerProfile" width={45} height={45}/>
      </div>
    </div>
  );
}
