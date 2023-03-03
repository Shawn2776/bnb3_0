import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section>
      <div className="relative">
        <Image src={img} className="object-cover" />
      </div>

      <div></div>
    </section>
  );
}

export default LargeCard;
