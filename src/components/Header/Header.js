import React from "react";
import "./Header.css";
import Logo from "../../Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="website logo" />
      <nav>
        <a href="/order">Order</a>
        <a href="/order_review">Order Review</a>
        <a href="/manage_inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
};

export default Header;
