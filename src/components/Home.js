import Brand from "./Brandvid";
import Normal from "./Normalvid";
import Star from "./Starvid";

export default function Home() {
  return (
    <div className="home">
      <div className="homeHeaderImgFlex">
        <img src="./images/thebear.jpeg" alt="thebear" width={1300} height={330} className="homeHeaderImg"/>
      </div>
      <div className="homeBrand">
        <Brand image="./images/disneylabel.png" alt="disney"/>
        <Brand image="./images/pixarlabel.png" alt="pixar"/>
        <Brand image="./images/marvellabel.png" alt="marvel"/>
        <Brand image="./images/starwarslabel.png" alt="starwars"/>
        <Brand image="./images/natgeolabel.png" alt="natgeo"/>
        <Brand image="./images/starlabel.png" alt="star"/>
      </div>
      <h3>Animated Movies</h3>
      <div className="homeNormal">
        <Normal image="./images/tarzan.jpeg" alt="tarzan"/>
        <Normal image="./images/up.jpeg" alt="up"/>
        <Normal image="./images/simpsons.jpeg" alt="simpsons"/>
        <Normal image="./images/rio.jpeg" alt="rio2"/>
        <Normal image="./images/lionking.jpeg" alt="thelionking"/>
      </div>
      <h3>New to Disney+</h3>
      <div className="homeNormal">
        <Normal image="./images/futurama.jpeg" alt="futurama"/>
        <Normal image="./images/bear.jpeg" alt="thebear"/>
        <Normal image="./images/classof9.jpeg" alt="classof09"/>
        <Normal image="./images/guardians.jpeg" alt="guardiansofthegalaxy"/>
        <Normal image="./images/howimet.jpeg" alt="howimetyourfather"/>
      </div>
      <h3>What to Watch Tonight</h3>
      <div className="homeStar">
        <Star image="./images/saintx.jpeg" alt="saint-x"/>
        <Star image="./images/wintersoldier.jpeg" alt="thewintersoldier"/>
        <Star image="./images/wedding.jpeg" alt="weddingseason"/>
        <Star image="./images/loki.jpeg" alt="loki"/>
        <Star image="./images/daredevil.jpeg" alt="daredevil"/>
      </div>
      <h3>Continue Watching</h3>
      <div className="homeNormal">
        <Normal image="./images/elephants.jpeg" alt="secretoftheelephants"/>
        <Normal image="./images/edsheeran.jpeg" alt="edsheeran"/>
        <Normal image="./images/obiwan.jpeg" alt="obi-wankenobi"/>
        <Normal image="./images/whitemen.jpeg" alt="whitemencantjump"/>
        <Normal image="./images/lokiseries.jpeg" alt="loki"/>
      </div>
      <h3>Comedy Movies</h3>
      <div className="homeNormal">
        <Normal image="./images/proposal.jpeg" alt="theproposal"/>
        <Normal image="./images/mikedave.jpeg" alt="mikeanddave"/>
        <Normal image="./images/borat.jpeg" alt="borat"/>
        <Normal image="./images/dude.jpeg" alt="dudewheresmycar"/>
        <Normal image="./images/alwayssunny.jpeg" alt="itsalwayssunnyinphiledelphia"/>
      </div>
      <h3>Because You Watched Family Guy</h3>
      <div className="homeNormal">
        <Normal image="./images/simpsonsseries.jpeg" alt="thesimpsons"/>
        <Normal image="./images/futurama.jpeg" alt="futurama"/>
        <Normal image="./images/cleveland.jpeg" alt="theclevelandshow"/>
        <Normal image="./images/americandad.jpeg" alt="americandad"/>
        <Normal image="./images/bobburger.jpeg" alt="bobsburger"/>
      </div>
    </div>
  );
}
