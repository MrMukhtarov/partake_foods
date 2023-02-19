import React from 'react'
import { NavLink } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import './Header.css'
import BasketHeader from '../BasketHeader/BasketHeader'

const Header = () => {
    // producstDropDown
    const prodEnter = () =>{
        document.getElementById('prodDrop').style.display = 'block'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('header').style.transition = '.5s'
        document.querySelector('.logo').src = 'https://cdn.shopify.com/s/files/1/0012/2296/7353/files/blue-logo_190x.png?v=1654228954'
        document.querySelector('header').style.borderTop = '1px solid #EBF1F7'
    }

    const prodLevae = () => {
        document.getElementById('prodDrop').style.display = 'none'
        document.querySelector('.logo').src = 'https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x'
        document.querySelector('header').style.backgroundColor = '#FABFA8'
        document.querySelector('header').style.transition = '.5s'
        document.querySelector('header').style.borderTop = 'none'
    }
    // producstDropDown
    // ------------------
    // ourstoryDropDown
    const storyOpen = () => {
        document.getElementById('ourStory').style.display = 'block'
        document.getElementById('ourStory').style.opacity = '1'
        document.getElementById('ourStory').style.transition = 'opacity 1s ease-out'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('header').style.transition = '.5s'
        document.querySelector('.logo').src = 'https://cdn.shopify.com/s/files/1/0012/2296/7353/files/blue-logo_190x.png?v=1654228954'
        document.querySelector('header').style.borderTop = '1px solid #EBF1F7'
    }
    const storyClose = () => {
        document.getElementById('ourStory').style.display = 'none'
        document.getElementById('ourStory').style.opacity = '0'
        document.getElementById('ourStory').style.transition = 'opacity 1s ease-out'
        document.querySelector('.logo').src = 'https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x'
        document.querySelector('header').style.backgroundColor = '#FABFA8'
        document.querySelector('header').style.transition = '.5s'
        document.querySelector('header').style.borderTop = 'none'
    }
    // ourstoryDropDown
    // -----------------
    // blogDropDown
    const blogOpen = () => {
        document.getElementById('blogDropDown').style.display = 'block'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('header').style.transition = '.5s'
        document.querySelector('.logo').src = 'https://cdn.shopify.com/s/files/1/0012/2296/7353/files/blue-logo_190x.png?v=1654228954'
        document.querySelector('header').style.borderTop = '1px solid #EBF1F7'
    }
    const blogClose = () => {
        document.getElementById('blogDropDown').style.display = 'none'
        document.querySelector('.logo').src = 'https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x'
        document.querySelector('header').style.backgroundColor = '#FABFA8'
        document.querySelector('header').style.transition = '.5s'
        document.querySelector('header').style.borderTop = 'none'
    }
    // blogDropDown
    // input
    const searchIcon = () => {
      document.getElementById('searchDiv').style.display = 'block'
      document.body.classList.add("stop-scrolling");
    }
    const exitIcon = () => {
        document.getElementById('searchDiv').style.display = 'none'
        document.body.classList.remove("stop-scrolling");
      }
    const hidePopup = () => {
        document.getElementById('searchDiv').style.display = 'none'
        document.body.classList.remove("stop-scrolling");
    }
    // input
    // --------------
    // BASKET
    const basketOpen = () => {
        document.querySelector('.basketHeader').style.display = 'block'
        document.body.classList.add("stop-scrolling");
    }

    const openBurger = () => {
        document.getElementById('burgers').style.display = 'block'
        document.body.classList.add("stop-scrolling");
    }


  return (
    <header>
        <div className="container">
            <div className="row justify-content-between align-items-center all">
                <div className="left col-lg-4 col-1">
                   <NavLink onMouseEnter={prodEnter} onMouseLeave={prodLevae}  id='pr' className='tab' to={'/'}>Products</NavLink>
                   <NavLink onMouseEnter={storyOpen} onMouseLeave={storyClose} className='tab' to={'/'}>Our Story</NavLink>
                   <NavLink className='tab' to={'/'}>Ingredients</NavLink>
                   {/* media-mobile burger-menu icon */}
                   <i onClick={openBurger} className="fa-solid fa-bars burger"></i>
                   {/* media-mobile search icon */}
                   <i onClick={searchIcon} className="fa-solid fa-magnifying-glass ml-4 mediaSearch" title='search'></i>
                </div>
                <div className="center col-lg-4 col-4">
                    <NavLink to={'/'}><img className='logo' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x" alt="logo" /></NavLink>
                </div>
                <div className="right col-lg-3 align-items-center text-end col-2">
                    <NavLink className='tab' to={'/'}>Find Us</NavLink>
                    <NavLink onMouseEnter={blogOpen} onMouseLeave={blogClose} className='tab' to={'/'}>Blog</NavLink>
                    <i onClick={searchIcon} className="fa-solid fa-magnifying-glass ml-4 searchNav" title='search'></i>
                    <i className="fa-solid fa-user"></i>
                    <i onClick={basketOpen} className="fa-solid fa-cart-shopping" title='basket'></i>
                </div>

                {/* Drop Down Products */}
            <div id='prodDrop' onMouseEnter={prodEnter}  onMouseLeave={prodLevae} className="producsDropDown bg-white">
                    <div className='d-flex'>
                        <div className="left col-lg-2">
                            <NavLink to={'/'}>Best Sellers</NavLink>
                            <NavLink to={'/'}>Snack Packs</NavLink>
                            <NavLink to={'/'}>Gifts</NavLink>
                            <NavLink to={'/'}>Loyality Program</NavLink>
                            <NavLink to={'/'}>Build Your Own</NavLink>
                        </div>
                        <div className="right col-lg-10">
                            <div className="box col-lg-3 text-center">
                                <NavLink to={'/'}><img className='img-fluid mb-2' src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/menu-1.png?v=1640771968' alt='img'/></NavLink>
                                <NavLink className='boxLink' to={'/'}><br/> VARIETY PACKS</NavLink>
                            </div>
                            <div className="box col-lg-3 text-center">
                                <NavLink to={'/'}><img className='img-fluid mb-2' src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/menu-2.png?v=1640771968' alt='img'/></NavLink>
                                <NavLink className='boxLink' to={'/'}><br/>COOKIES</NavLink>
                            </div>
                            <div className="box col-lg-3 text-center">
                                <NavLink to={'/'}><img className='img-fluid mb-2' src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Baking_Mixes_Main_Menu_771a0291-8df9-4274-a0d8-5d23b709c8e1.png?v=1642497529' alt='img'/></NavLink>
                                <NavLink className='boxLink' to={'/'}><br/>BAKING MIXES</NavLink>
                            </div>
                            <div className="box col-lg-3 text-center">
                                <NavLink to={'/'}><img className='img-fluid mb-2' src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Breakfast_Mixes_Main_Menu_ceee14d2-324b-4824-ab8e-07945334bfef.png?v=1642497596' alt='img'/></NavLink>
                                <NavLink className='boxLink' to={'/'}>BREAKFAST MIXES</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Of The DropDown Products */}
                {/* ----------------------------------- */}
                {/* Our Story Drop Dopw Start */}
                <div id='ourStory' onMouseEnter={storyOpen} onMouseLeave={storyClose} className="ourstory">
                   <div className="containerOurStory">
                   <div className="d-flex">
                        <div className="box col-lg-3 text-center">
                        <NavLink to='/'> <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Denise_Vivi_Homepage_square.jpg?v=1642469781" alt="img" />
                           <br /> ABOUT US</NavLink>
                        </div>
                        <div className="box col-lg-3 text-center">
                        <NavLink to='/'>  <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/FAQ_556_556_1.png?v=1642470306" alt="img" />
                           <br /> FAQ</NavLink>
                        </div>
                        <div className="box col-lg-3 text-center">
                        <NavLink to='/'> <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Ingredients_Menu_220x220_a254a351-a43f-4326-9630-6b50707c68ff.png?v=1642081962" alt="img" />
                            INGREDIETNS</NavLink>
                        </div>
                        <div className="box col-lg-3 text-center">
                        <NavLink to='/'>  <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/press_menu_750x.png?v=1642470439" alt="img" />
                           <br /> PRESS</NavLink>
                        </div>
                    </div>
                   </div>
                </div>
                {/* Our Story Drop Dopw End */}
                {/* ------------------------------ */}
                {/* blog dorpDown start */}
                <div id='blogDropDown' onMouseEnter={blogOpen} onMouseLeave={blogClose} className="blogDropDown">
                    <div className="containerblogDropDown">
                        <div className='d-flex'>
                            <div className="box col-lg-4 text-center">
                            <NavLink to='/'> <img className='w-100' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/From_the_blog_Menu_220x220_9832e985-14cf-4d41-a65e-f1d1ea2a1522.png?v=1642082421" alt="img" />
                                FROM THE BLOG</NavLink>
                            </div>
                            <div className="box col-lg-4 text-center">
                            <NavLink to='/'> <img className='w-100' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Recipes_Menu_220x220_71d62ea7-69c1-4b81-a25f-e288f1e688a1.png?v=1642082702" alt="img" />
                                PARTAKE RECIEPES</NavLink>
                            </div>
                            <div className="box col-lg-4 text-center">
                            <NavLink to='/'> <img className='w-100' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/From_Denise_Menu_2_220x220_b48d2c3f-45a2-403c-a5f8-dcbe9c3368e7.png?v=1642112887" alt="img" />
                                FROM DENISE</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog dorpDown end */}
                {/* --------------- */}
                {/* search */}
                <div id='searchDiv' className="search">
                    <div className="blocker" onClick={hidePopup}></div>
                    <div className="searchContainer">
                        <div className="all">
                           <div className="top d-flex justify-content-center align-items-center">
                           <div className="left col-lg-5 col-11">
                                <div className="inputdiv d-flex">
                                <input id='inputSearch' type="text" name='search' placeholder='Search'/>
                                <i className="fa-solid fa-magnifying-glass text-end"></i>
                                </div>
                            </div>
                            <div className="right col-1 p-0">
                            <i onClick={exitIcon} className="fa-solid fa-xmark" title='close'></i>
                            </div>
                           </div>
                           <div className="bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
        <BasketHeader/>
        <BurgerMenu id='burgers'/>    
    </header>
  )
}

export default Header