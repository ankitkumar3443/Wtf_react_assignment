import Card from "./Card";
import arr from "./temp";


function Allgyms() {
    const cardArr=arr.data; 
    return ( 
        <div className="section_cards"> 
            {cardArr.map(el=> <Card key={Math.random()} data={el}/>)}
        </div>
    );
  }
  
  export default Allgyms;
  