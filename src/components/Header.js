import { HomeIcon, MagnifyingGlassIcon, PlusIcon, StarIcon, FilmIcon, TvIcon } from "@heroicons/react/20/solid"
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div className="header">
      <div className="headerSections">
        <img src="./images/disneylogo.png" alt="logo" className="headerLogo" width={125} height={40}/>
        <div className="headerGenres">
          <HomeIcon width={20} height={20} className="headerIcon"/> <Link to="/" className="link"><p>home</p></Link>
        </div>
        <div className="headerGenres">
          <MagnifyingGlassIcon width={20} height={20} className="headerIcon"/> <Link to="/search" className="link"><p>search</p></Link>
        </div>  
        <div className="headerGenres">
          <PlusIcon width={20} height={20} className="headerIcon"/> <Link to="/watchlist" className="link"><p>watchlist</p></Link>
        </div>
        <div className="headerGenres">
          <StarIcon width={20} height={20} className="headerIcon"/> <Link to="/originals" className="link"><p>originals</p></Link>
        </div>
        <div className="headerGenres">
          <FilmIcon width={20} height={20} className="headerIcon"/> <Link to="/movies" className="link"><p>movies</p></Link>
        </div>
        <div className="headerGenres">
          <TvIcon width={20} height={20} className="headerIcon"/> <Link to="/series" className="link"><p>series</p></Link>
        </div>
      </div>
      <div className="headerPerson">
        <p>ethan</p> <img src="./images/aladdinprofile.jpeg" alt="aladdin" className="headerProfile" width={45} height={45}/>
      </div>
    </div>
  );
}
