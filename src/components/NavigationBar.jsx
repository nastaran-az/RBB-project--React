import React from "react";
import logo from "../design/pic/logo.jpg";

const NavigationBar = () => {
  return (
    <div class="main-navigation">
      <nav class="main-navigation">
        <div class="logo-box">
          <img class="logo" src={logo} alt="logo" />
        </div>

        <ul>
          <li class="navigation-item">
            <a href="#home" class="navigation-link">
              Home
            </a>
          </li>
          <li class="navigation-item">
            <a href="about.html" class="navigation-link">
              about
            </a>
          </li>
          <li class="navigation-item">
            <a href="about.html" class="navigation-link">
              Services
            </a>
          </li>
          <li class="navigation-item">
            <a href="#" class="navigation-link">
              gallery
            </a>
          </li>
          <li class="navigation-item">
            <a href="#" class="navigation-link">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavigationBar;
