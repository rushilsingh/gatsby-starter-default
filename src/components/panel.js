import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./about"
import Media from "./media"
const Panel = () => (
  <div class="container">
  <div class="row">
      <div class="col">
        <div class="sticky-top">
          <Media></Media>
        </div>
    </div>
    <div class="col">
    <About></About>
    </div>
  </div>
</div>
 
);

export default Panel;
