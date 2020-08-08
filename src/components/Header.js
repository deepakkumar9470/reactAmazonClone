import React from 'react'
import  './Header.css';
import logo from '../images/amazon.png';
import {Link} from 'react-router-dom';
import  SearchIcon  from '@material-ui/icons/Search';
import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import {auth} from './Firebase';

function Header() {
   const [{basket ,user}] = useStateValue();
   
   const loginUser=()=>{
      if(user){
         auth.signOut();
      }
   } 

    return (
        <nav className="header">
          <Link to="/">
            <img className="header_image"
            src={logo} alt="Amazonlogo"></img>
          </Link>
          
          <div className="header-search">
            <input text="text" className="header-searchInput"/>
            <SearchIcon className="header-searchIcon"/>
          </div>
            
           <div className="header-nav">
            {/* 1st Link */}
               <Link to={!user && "/login"} className="header-link">
                  <div onClick={loginUser} className="header-options">
                     <span className="link-span-1">Hello {user?.email}</span>
                     <span className="link-span-2">{user ? 'SignOut' :'Login'}</span>
                  </div>
               </Link>
               {/* 2nd Link */}
               <Link to="/" className="header-link">
               <div className="header-options">
                  <span className="link-span-1">Returns</span>
                  <span className="link-span-2">& Orders</span>
               </div>
            </Link>
            {/* 3rd Link */}
               <Link to="/" className="header-link">
                  <div className="header-options">
                     <span className="link-span-1">Try</span>
                     <span className="link-span-2">Prime</span>
                  </div>
               </Link> 
               
               {/* 4th Link */}
              <Link to="/checkout" className="header-link">
               <div className="header-basket">
                  <ShoppingBasketIcon/>
                  <span className="link-span-2 header-basketCount">{basket?.length}</span>
               </div>
              </Link>    

              


           </div> 

           
        </nav>
        
    );
}

export default Header;
