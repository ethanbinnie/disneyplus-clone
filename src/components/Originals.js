import Normal from "./Normalvid"

export default function Originals() {
    return (
        <div className="originals">
            <h1 className="originalsHeader">ORIGINALS</h1>
            <h3 className="originalsText">Disney+ Featured Originals</h3>
            <div className="originalsNormal">
                <Normal image="./images/secretinvasion.jpeg"/>
                <Normal image="./images/edsheeran.jpeg"/>
                <Normal image="./images/matildas.jpeg"/>
                <Normal image="./images/hsm.jpeg"/>
                <Normal image="./images/stanlee.jpeg"/>
            </div>
            <h3 className="originalsText">Star Featured Originals</h3>
            <div className="originalsNormal">
                <Normal image="./images/futurama.jpeg"/>
                <Normal image="./images/bear.jpeg"/>
                <Normal image="./images/howimet.jpeg"/>
                <Normal image="./images/saint.jpeg"/>
                <Normal image="./images/kardashians.jpeg"/>
            </div>
        </div>
    )
}