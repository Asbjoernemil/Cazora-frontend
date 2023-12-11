import AngelWings from "../components/visuals/AngelWings";
import DevilWings from "../components/visuals/DevilWings";
import Logo from "../components/visuals/Logo";

export default function Home(){
    return(
        <div className="grid grid-cols-1 justify-items-center">
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
       
        </div>
    )
}