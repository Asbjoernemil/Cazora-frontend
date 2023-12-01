import AngelWings from "../components/visuals/AngelWings";
import DevilWings from "../components/visuals/DevilWings";
import Glitter from "../components/visuals/Glitter";
import Glitter2 from "../components/visuals/Glitter2";
import Logo from "../components/visuals/Logo";

export default function MainPage(){
    return(
        <div>
            <div className="w-1/2">
            <Glitter/>
            </div>
            <br />
            <div className="w-1/4">
            <AngelWings />
            </div>
            <br />
            <div className="m-6">
            <Logo />
            </div>
            <br />
             <div className="w-1/4">
            <DevilWings/>
            </div>
            <br />
            <div className="w-1/4">
            <Glitter2/>
            </div>
       
        </div>
    )
}