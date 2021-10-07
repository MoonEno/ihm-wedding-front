import React from 'react';
import 'styled-components';

export const HeaderNavOrg = () => {
  
  return (
    <>
      <nav className="global-nav">
        <div className="global-nav-links">
          <a href="#" className="global-nav-item">
            Rooms
          </a>
          <a href="#" className="global-nav-item">
            Ideas
          </a>
          <a href="#" className="global-nav-item">
            Stores
          </a>
          <a href="#" className="global-nav-item">
            Contact
          </a>
        </div>
      </nav>
      <nav className="local-nav">
        <div className="local-nav-links">
          <a href="#" className="product-name">
            Welcome Wedding
          </a>
          <a href="#">개요</a>
          <a href="#">제품사양</a>
          <a href="#">구입하기</a>
        </div>
      </nav>
    </>
  );
};
