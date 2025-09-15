import React, { useState, useEffect } from "react";
import Product_Styled from "../../assets/images/Product_Styled.png";
import MODEL_STYLED from "../../assets/images/MODEL_STYLED.png";
import Carousel from "./carousel-component/carousel";

const Main = () => {
  const [currentImage, setCurrentImage] = useState<string>(Product_Styled.src);
  const [mounted, setMounted] = useState(false);

  // Array of image sources
  const images = [Product_Styled.src, MODEL_STYLED.src];

  const slides = [
    <div key="1" className="slide-content">
      <a href="https://us.pandora.net/en/mypandora#contentID=1228abc0-5b0c-43fc-9463-218b2a8f7492&item=0">
        <img
          src="https://cdn.graphics.amplience.net/v1/media/graphics/i/pandora/pnd-wishlistfilled"
          alt="myPandora"
        />
        <p>My PANDORA</p>
        <h2>Save 10% + earn points with your purchases.</h2>
      </a>
    </div>,
    <div key="2" className="slide-content">
      <a href="https://us.pandora.net/en/mypandora#contentID=1228abc0-5b0c-43fc-9463-218b2a8f7492&item=0">
        <img
          src="https://cdn.graphics.amplience.net/v1/media/graphics/i/pandora/pnd-creditcard"
          alt="Pandora Credit Card"
        />
        <p>Pandora Credit Card</p>
        <h2>
          Open a Pandora Credit Card & Save 10% of your first qualifying
          purchase today.
        </h2>
      </a>
    </div>,
    <div key="3" className="slide-content">
      <a href="https://us.pandora.net/en/mypandora#contentID=1228abc0-5b0c-43fc-9463-218b2a8f7492&item=0">
        <img
          src="https://cdn.graphics.amplience.net/v1/media/graphics/i/pandora/pnd-pencil"
          alt="pnd-pencil"
        />
        <p>Student Discount</p>
        <h2>Eligible students save 10% with Student Beans or ID.me</h2>
      </a>
    </div>,
    <div key="4" className="slide-content">
      <a href="https://us.pandora.net/en/mypandora#contentID=1228abc0-5b0c-43fc-9463-218b2a8f7492&item=0">
        <img
          src="https://cdn.graphics.amplience.net/v1/media/graphics/i/pandora/pnd-checkmark"
          alt="pnd-checkmark"
        />
        <p>
          Military & Veterans, First Responders, Teachers, Students, Nurses and
          Medical Providers Discount
        </p>
        <h2>Get verified with ID.me and save 10% online.</h2>
      </a>
    </div>,
    <div key="5" className="slide-content">
      <a href="https://us.pandora.net/en/mypandora#contentID=1228abc0-5b0c-43fc-9463-218b2a8f7492&item=0">
        <img
          src="https://cdn.graphics.amplience.net/v1/media/graphics/i/pandora/pnd-storenew"
          alt="pnd-storenew"
        />
        <p>Free In-Store Pickup</p>
        <h2>Buy Online, Pickup In-Store within 2 hours.</h2>
      </a>
    </div>,
    <div key="6" className="slide-content">
      <a href="https://us.pandora.net/en/mypandora#contentID=1228abc0-5b0c-43fc-9463-218b2a8f7492&item=0">
        <img
          src="https://cdn.graphics.amplience.net/v1/media/graphics/i/pandora/pnd-creditcard"
          alt="pnd-creditcard"
        />
        <p>Sparkle Now. Pay Later.</p>
        <h2>Buy now and pay later, Interest-free with Afterpay or Klarna.</h2>
      </a>
    </div>,
    <div key="7" className="slide-content">
      <a href="https://us.pandora.net/en/mypandora#contentID=1228abc0-5b0c-43fc-9463-218b2a8f7492&item=0">
        <img
          src="https://cdn.graphics.amplience.net/v1/media/graphics/i/pandora/pnd-return"
          alt="pnd-return"
        />
        <p>Free Returns</p>
        <h2>Prepaid shipping label included with every order.</h2>
      </a>
    </div>,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(randomImage);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="main-section">
      <div className="moving-part">
        <img
          src="/BraceletPromoEcomm.png"
          alt="Promo"
          className="promo-image"
        />
        <div className="swapping-images">
          <img
            src={currentImage}
            alt="Styled Product"
            className="styled-image"
          />
        </div>
        <div className="special-moment">
          <div className="special-moment-text">
            <h2>For Every Special Moment</h2>
          </div>
          <div className="first-products">
            <div className="video">
              <a href="https://us.pandora.net/en/collections/disney/">
                {mounted && (
                  <video
                    src="//cdn.media.amplience.net/v/pandora/Q324_Disney_Villains_Animation_03_The_Evil_Queen_15s_4x5_Clean/mp4_720p"
                    autoPlay
                    muted
                    loop
                  ></video>
                )}
              </a>
            </div>

            <div className="best-sellers">
              <a href="https://">
                <img
                  className="image-sellers"
                  alt="Best Sellers"
                  src="//cdn.media.amplience.net/i/pandora/Q324_E_Spiritual_Model_01_Web?fmt=auto&qlt=60&crop={0%},{7.84%},{100%},{84.21%}"
                />
              </a>
            </div>
          </div>
          <div className="second-products">
            <div className="engraving">
              <a href="https://">
                <img
                  alt="Engraving"
                  src="//cdn.media.amplience.net/i/pandora/REF894404_AW24_E_ENGRV_Ecomm_M43_BLANK_NEW?fmt=auto&qlt=60&crop={59.01%},{14.66%},{26.96%},{80.77%}"
                />
              </a>
            </div>
            <div className="teninis">
              <a href="https://">
                <img
                  alt="Teninis Bracelets"
                  src="//cdn.media.amplience.net/i/pandora/HIGH_Q124_Editorial_Feb_Most_Loved_Product_04_RGB?fmt=auto&qlt=60&crop={39.25%},{22.62%},{23.6%},{47.24%}"
                />
              </a>
            </div>
          </div>
          <div className="third-products">
            <div className="rings">
              <a href="https://">
                <img
                  alt="Rings"
                  src="//cdn.media.amplience.net/i/pandora/Q324_E_PDP_MODEL_STYLED_19_RGB?fmt=auto&qlt=60&crop={22.9%},{13.75%},{31.05%},{46.55%}"
                />
              </a>
            </div>
            <div className="halloween">
              <a href="https://">
                <img
                  alt="Halloween"
                  src="//cdn.media.amplience.net/i/pandora/MEDIUM_Q324-OCT-SOME-IG-GRID-02B?fmt=auto&qlt=60&crop={7.87%},{6.15%},{92.13%},{73.7%}"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="jewelry">
          <div className="img-product">
            <img src="/Horoscope_product.png" alt="Horoscope product" />
          </div>
          <div className="The-Libra-Aesthetic">
            <h3>
              The Libra <br />
              Aesthetic
            </h3>
            <p>
              Zodiac jewelry that matches your <br />
              superior sense of style.
            </p>
            <button className="jewelry-button"> GET THE LOOK</button>
          </div>
        </div>
        <div className="discover-image">
          <img src="/discoverPandora.png" alt="Discover Pandora" />
        </div>
        <div className="products">
          <a className="charms" href="/">
            <img src="/charms.png" alt="charms" />
            <h2>CHARMS</h2>
          </a>
          <a className="bracelets" href="/">
            <img src="/bracelets.png" alt="bracelets" />
            <h2>BRACELETS</h2>
          </a>
          <a className="rings" href="/">
            <img src="/rings.png" alt="rings" />
            <h2>RINGS</h2>
          </a>
          <a className="necklaces" href="/">
            <img src="/necklaces.png" alt="necklaces" />
            <h2>NECKLACE</h2>
          </a>
          <a className="earrings" href="/">
            <img src="/Earrings.png" alt="Earrings" />
            <h2>EARRINGS</h2>
          </a>
          <a className="new" href="https://us.pandora.net/en/new-in/">
            <img src="/new.png" alt="New" />
            <h2>NEW</h2>
          </a>
        </div>
        <div className="carousel-image">
          <Carousel slides={slides} />
        </div>
      </div>
      <div className="fixed-part">
        <a className="feedback" href="">
          feedback
        </a>
      </div>
    </div>
  );
};

export default Main;
