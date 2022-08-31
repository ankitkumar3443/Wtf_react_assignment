import InputBar from "./InputBar";

function Filters() {
  return (
    <div className="section_filter">
      <div className="filter_head">Filters</div>
      <div className="filter_loc">
        <label>Location</label> <br />
        <input type="search" placeholder="🔍 Enter Location" /> 
      </div>
      <div className="filter_price">
        <label>Price</label><br/>
        <input type="text" placeholder="Min" />
        <input type="text" placeholder="Max" />
      </div>
      <div className="filter_city">
      <label>Cities</label><br/>

      <select>
        
      <option value="_">Select city</option> 
        <option value="newDelhi">New Delhi</option>
        <option value="ghaziabad">Ghaziabad</option>
        <option value="noida">Noida</option>
        <option value="delhi">Delhi</option> 
      </select>
      </div>
    </div>
  );
}

export default Filters;
