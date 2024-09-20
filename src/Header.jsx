import React from 'react'
import img1 from './assets/Freact.jpg';
import img2 from './assets/React.jpg';
import img3 from './assets/Vue.jpg';
import img4 from './assets/Angular.jpg';

const Header = () => {
  return (
    <>
      <header>
        <h2>React Course for Beginners</h2>
        <img src={img1} alt="headerpng" />
        <div className="icon">
          <img src={img2} alt="" width={30}/>
          <img src={img3} alt=""  width={30}/>
          <img src={img4} alt="" width={30}/>
        </div>
      </header>

    </>

  )
}

export default Header