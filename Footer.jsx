import React from "react";

function Footer() {
  var currYear = new Date().getUTCFullYear();
  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}

export default Footer;
