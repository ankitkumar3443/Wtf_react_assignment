


function Card({data}) {
    console.log(data);
    return (  
            <div className="card"> 
                <div className="card_Image">
                    {data.free_trial>0 && <div className="free">Free</div>}
                </div>
                <div>
                    <div className="card_title">{data.gym_name}</div>
                    <div className="rating">
                    {data.rating} <i class="fa fa-star-o" aria-hidden="true"></i> 
                    <i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="address1">{data.address1}, {data.address2}</div>
                    <div className="address2"><i class="fa fa-location-arrow" aria-hidden="true"></i>{data.duration_text} away | {data.distance_text}</div> 
                    <div className="card_footer">
                        <div className="offer"><i class="fa fa-inr" aria-hidden="true"></i> 3000 for 3 Months</div>
                        <button className="bookNow">Book Now</button>
                    </div>      
                </div>
            </div> 
    );
  }
  
  export default Card;


/*    <div className="card"> 
        <div className="card_Image">
            <div className="free">Free</div>
        </div>
        <div>
            <div className="card_title">WTF: Hybrid Gym</div>
            <div className="rating">
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <div className="address1">A 452 Basement, New Ashok Nagar</div>
            <div className="address2"><i class="fa fa-location-arrow" aria-hidden="true"></i> 3.18 minutes away | 2.12 km</div> 
            <div className="card_footer">
                <div className="offer"><i class="fa fa-inr" aria-hidden="true"></i> 3000 for 3 Months</div>
                <button className="bookNow">Book Now</button>
            </div>      
        </div>
    </div> 
);*/
  