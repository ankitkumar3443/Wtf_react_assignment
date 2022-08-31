import Allgyms from "./Allgyms";
import Filters from "./Filters";
import InputBar from "./InputBar";


function MainSection() {
    return (
      <div className="main">
        <div className="section_search">
            <InputBar/>
        </div> 
        <Filters/> 
        <Allgyms/> 


      </div>
    );
  }
  
  export default MainSection;
  