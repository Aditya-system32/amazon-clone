import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../provider/StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__image"
          src="https://i.ibb.co/52pm3Gq/Amazon-logo-1.png"
          alt=""
        />
      </Link>
      <div className="header__searchbar">
        <input className="header__input" type="text" />
        <SearchIcon className="header__searchicon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="header__options">
            <span className="header_optionsLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionsLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__options">
          <span className="header_optionsLineOne">Returns</span>
          <span className="header_optionsLineTwo">& Orders</span>
        </div>
        <div className="header__options">
          <span className="header_optionsLineOne">Your</span>
          <span className="header_optionsLineTwo">Prime</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__optionsBasket">
            <ShoppingCartIcon />
            <span className="header_optionsLineTwo header__BasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
