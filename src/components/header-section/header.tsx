import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const header = () => {
  return (
    <div className="header">
      <div className="announcement">
        <p className="announcement-paragraph">
          <b>FREE BRACELET</b> with qualifying purchase.
        </p>
      </div>
      <div className="logo-icons-section">
        <div className="logo">
          <img alt="PANDORA LOGO" src="/Pandora-Logo.png" />
        </div>
        <div className="icons-search">
          <div className="search">
            <input className="input-search" type="text" placeholder="search" />
            <CiSearch className="search-icon" />
          </div>
          <div className="icons">
            <a
              href="https://us.pandora.net/en/my-wishlist"
              target="_blank"
              className="icon-link"
            >
              <CiHeart className="icon" />
              <span className="tooltip">Wishlist</span>
            </a>
            <a
              href="https://stores.pandora.net/en-us/"
              target="_blank"
              className="icon-link"
            >
              <CiLocationOn className="icon" />
              <span className="tooltip">Find Stores</span>
            </a>
            <a
              href="https://us.pandora.net/en/login?join=true"
              target="_blank"
              className="icon-link"
            >
              <IoPersonOutline className="icon" />
              <span className="tooltip">Login to your account</span>
            </a>
            <a
              href="https://us.pandora.net/en/shopping-bag"
              target="_blank"
              className="icon-link"
            >
              <BsHandbag className="icon" />
              <span className="tooltip">Shopping Bag Items</span>
            </a>
          </div>
        </div>
      </div>
      <div className="nav">
        <nav className="navigation-bar">
          <a href="#">
            New In
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="#">
            Charms & Bracelets
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Rings
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Necklaces
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Earrings
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Gifts
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">Engravable Jewelry</a>
          <a href="">
            The Gold Edit
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Collections
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            LAB-GROWN DIAMONDS
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Discover
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default header;
