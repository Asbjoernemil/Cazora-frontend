import SoMe from "./SoMe";

export default function Footer (){
    return (
        <footer className="flex justify-center w-full">
            <div></div>
            <h3 className="m-3 text-xs/8 ">
                made by ZAP
            </h3>
            <div className='flex justify-center m-4'>
              
                <h3>
                See more at our instagram page: 
                </h3>   
                <SoMe />
            </div>
            
        </footer>
    )
}