import SoMe from "./SoMe";

export default function Footer (){
    return (
        <footer className="pt-6 relative">
          
            <div className='flex justify-center m-4'>
                <h3>
                See more at our instagram page: 
                </h3>   
                <SoMe />
            </div>
            <h3 className="m-3 text-xs/8 flex justify-end ">
                made by ZAP
            </h3>
            
        </footer>
    )
}