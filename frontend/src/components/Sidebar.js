import React from 'react';

function Sidebar(props) {
    return (
        <div class="sidebar" data-color="white" data-active-color="danger">
        <div class="logo">
          <a
            href="http://www.creative-tim.com"
            class="simple-text logo-mini"
          >
            <div class="logo-image-small">
              <img src="../assets/img/logo-small.png" />
            </div>
          </a>
          <a
            href="http://www.creative-tim.com"
            class="simple-text logo-normal"
          >
            Creative Tim
          </a>
        </div>
        <div class="sidebar-wrapper">
          <ul class="nav">
            <li class="active ">
              <a href="./dashboard.html">
                <i class="nc-icon nc-bank" />
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="./icons.html">
                <i class="nc-icon nc-diamond" />
                <p>Icons</p>
              </a>
            </li>
            <li>
              <a href="./map.html">
                <i class="nc-icon nc-pin-3" />
                <p>Maps</p>
              </a>
            </li>
            <li>
              <a href="./notifications.html">
                <i class="nc-icon nc-bell-55" />
                <p>Notifications</p>
              </a>
            </li>
            <li>
              <a href="./user.html">
                <i class="nc-icon nc-single-02" />
                <p>User Profile</p>
              </a>
            </li>
            <li>
              <a href="./tables.html">
                <i class="nc-icon nc-tile-56" />
                <p>Table List</p>
              </a>
            </li>
            <li>
              <a href="./typography.html">
                <i class="nc-icon nc-caps-small" />
                <p>Typography</p>
              </a>
            </li>
            <li class="active-pro">
              <a href="./upgrade.html">
                <i class="nc-icon nc-spaceship" />
                <p>Upgrade to PRO</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    
    )
}

export default Sidebar;