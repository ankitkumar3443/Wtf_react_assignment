import {useState} from 'react'

let timer;

function Navbar() {
  const [navbar,setNavbar] = useState(false)

  const changeNavbar=()=>{ 
    if(timer!==undefined) clearTimeout(timer); 
    timer = setTimeout(()=>{
      console.log("changeNavbar " )
      if(window.scrollY>=80)setNavbar(true)
      else setNavbar(false);
    }, 500);
  }

  window.addEventListener('scroll',changeNavbar)

  return (
    <div className={navbar? 'navbar active': 'navbar'}>
      <div>
        <img src="./logo.png" alt="logo"  className="navbar-logo"/>
      </div>
      <div className="navbar-tabs">
        <div>Fitness</div>
        <div>Nutrition</div>
        <div className="active-tab">Gyms</div>
        <div>Become WTF Partner</div>
        <div>About Us</div>
        <div className="login">Login</div>
      </div>
    </div>
  );
}

export default Navbar;
