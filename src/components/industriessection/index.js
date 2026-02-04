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
  { id: 5, title: "Brass Parts", image: brassparts },
  { id: 6, title: "Cable & Wire", image: cablewire },
  { id: 7, title: "Copper & Parts", image: copperparts },
  { id: 8, title: "Cosmetics", image: cosmetics },
  { id: 9, title: "Cuttingtools", image: cuttingtools },
  { id: 10, title: "Electronics", image: electronics },
  { id: 11, title: "Engineering", image: engineering },
  { id: 12, title: "Elevators", image: elevators },
  { id: 13, title: "Fabric", image: fabric },
  { id: 14, title: "Fabrication", image: fabrication },
  { id: 15, title: "FMCG", image: fmcg },
  { id: 16, title: "Gift & Article", image: giftarticle },
  { id: 17, title: "Hardware", image: hardware },
  { id: 18, title: "Jewellery", image: jewellery },
  { id: 19, title: "Kitchen Ware", image: kiitchenware },
  { id: 20, title: "LED", image: led },
  { id: 21, title: "Manufacturing", image: manufacturing },
  { id: 22, title: "Mobile Accessories", image: mobileaccessories },
  { id: 23, title: "Optical", image: optical },
  { id: 24, title: "Pet Bottles", image: petbottles },
  { id: 25, title: "Pharma", image: pharma },
  { id: 26, title: "Pipe", image: pipe },
  { id: 27, title: "Pipe Fittings", image: pipefittings },
  { id: 28, title: "Pump", image: pump },
  { id: 29, title: "Ro Water", image: rowater },
  { id: 30, title: "Sheet Metal", image: sheetmetal },
  { id: 31, title: "Solar", image: solar },
  { id: 32, title: "Surgical Instrument", image: surgicalinstrument },
  { id: 33, title: "Tool & Toolings", image: tooltoolings },
  { id: 34, title: "Utensils", image: utensils },
  { id: 35, title: "Valve", image: valve },
  { id: 36, title: "Watch & Optics", image: watchoptics },
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
