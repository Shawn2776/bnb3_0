import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How BnB 3.0 Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>BnB 3.0 Plus</p>
        <p>BnB Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>This is a pretty awesome clone</p>
        <p>Referrals Accepted</p>
        <p>WebDev2776</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>WebDev2776</p>
        <p>Presents</p>
        <p>Investors</p>
        <p>BnB 3.0 Plus</p>
        <p>Join Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>HHelp Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For The Win</p>
      </div>
    </div>
  );
}

export default Footer;
