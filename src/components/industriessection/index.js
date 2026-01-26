import React from "react";
import styles from "./industriessection.module.scss";
import Image from "next/image";
import d3ddie from "@/assests/images/d3ddie.webp";
import advertising from "@/assests/images/advertising.webp";
import automobile from "@/assests/images/automobile.webp";
import bearing from "@/assests/images/bearing.webp";
import brassparts from "@/assests/images/brassparts.webp";
import cablewire from "@/assests/images/cablewire.webp";
import copperparts from "@/assests/images/copperparts.webp";
import cosmetics from "@/assests/images/cosmetics.webp";
import cuttingtools from "@/assests/images/cuttingtools.webp";
import electronics from "@/assests/images/electronics.webp";
import engineering from "@/assests/images/engineering.webp";
import elevators from "@/assests/images/elevators.webp";
import fabric from "@/assests/images/fabric.webp";
import fabrication from "@/assests/images/fabrication.webp";
import fmcg from "@/assests/images/fmcg.webp";
import giftarticle from "@/assests/images/giftarticle.webp";
import hardware from "@/assests/images/hardware.webp";
import jewellery from "@/assests/images/jewellery.webp";
import kiitchenware from "@/assests/images/kiitchenware.webp";
import led from "@/assests/images/led.webp";
import manufacturing from "@/assests/images/manufacturing.webp";
import mobileaccessories from "@/assests/images/mobileaccessories.webp";
import optical from "@/assests/images/optical.webp";
import petbottles from "@/assests/images/petbottles.webp";
import pharma from "@/assests/images/pharma.webp";
import pipe from "@/assests/images/pipe.webp";
import pipefittings from "@/assests/images/pipefittings.webp";
import pump from "@/assests/images/pump.webp";
import rowater from "@/assests/images/rowater.webp";
import solar from "@/assests/images/solar.webp";
import surgicalinstrument from "@/assests/images/surgicalinstrument.webp";
import tooltoolings from "@/assests/images/tooltoolings.webp";
import utensils from "@/assests/images/utensils.webp";
import valve from "@/assests/images/valve.webp";
import watchoptics from "@/assests/images/watchoptics.webp";
import sheetmetal from "@/assests/images/sheetmetal.webp";

const industries = [
  { id: 1, title: "2D 3D Die", image: d3ddie },
  { id: 2, title: "Advertising", image: advertising },
  { id: 3, title: "Automobile", image: automobile },
  { id: 4, title: "Bearing", image: bearing },
  { id: 1, title: "Brass Parts", image: brassparts },
  { id: 2, title: "Cable & Wire", image: cablewire },
  { id: 3, title: "Copper & Parts", image: copperparts },
  { id: 4, title: "Cosmetics", image: cosmetics },
  { id: 1, title: "Cuttingtools", image: cuttingtools },
  { id: 2, title: "Electronics", image: electronics },
  { id: 3, title: "Engineering", image: engineering },
  { id: 4, title: "elevators", image: elevators },
  { id: 1, title: "Fabric", image: fabric },
  { id: 2, title: "Fabrication", image: fabrication },
  { id: 3, title: "FMCG", image: fmcg },
  { id: 4, title: "Gift & Article", image: giftarticle },
  { id: 1, title: "Hardware", image: hardware },
  { id: 2, title: "Jewellery", image: jewellery },
  { id: 3, title: "Kitchen Ware", image: kiitchenware },
  { id: 4, title: "LED", image: led },
  { id: 1, title: "Manufacturing", image: manufacturing },
  { id: 2, title: "Mobile Accessories", image: mobileaccessories },
  { id: 3, title: "Optical ", image: optical },
  { id: 4, title: "Pet Bottles", image: petbottles },
  { id: 1, title: "Pharma", image: pharma },
  { id: 2, title: "Pipe", image: pipe },
  { id: 3, title: "Pipe Fittings", image: pipefittings },
  { id: 4, title: "Pump", image: pump },
  { id: 1, title: "Ro Water", image: rowater },
  { id: 2, title: "sheetmetal", image: sheetmetal },
  { id: 3, title: "Solar", image: solar },
  { id: 4, title: "Surgical Instrument", image: surgicalinstrument },
  { id: 1, title: "Tool & Toolings", image: tooltoolings },
  { id: 2, title: "Utensils", image: utensils },
  { id: 3, title: "Valve", image: valve },
  { id: 4, title: "Watch & optics", image: watchoptics },
];

export default function Industriessection() {
  return (
    <>
      <div className={styles.industries}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Industries We Serve</h2>

          <div className={styles.grid}>
            {industries.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image src={item.image} alt={item.title} fill />
                </div>

                <div className={styles.title}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
