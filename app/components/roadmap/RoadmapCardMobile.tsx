import { ROADMAP } from "@/constants";
import Image from "next/image";
import { RefObject } from "react";

interface Props {
  item: (typeof ROADMAP)[number];
  index: number;
  t: (key: string) => string;
  isShipVisible: boolean;
  isPairEven: boolean;
  shipMobileRef: RefObject<HTMLDivElement> | any;
}

const RoadmapCardMobile = ({ item, index, t, isShipVisible, isPairEven, shipMobileRef }: Props) => {
  return (
    <div className={`roadmap-item-mobile roadmap-item planet-${index + 1} ${isPairEven ? "even" : "odd"}`}>
      <div className="planet-wrapper">
        <div className="planet-card">
          <h3>{t(item.date)}</h3>
          <p>{t(item.text)}</p>

          <Image src="/images/roadmap/roadmap-slot-mobile.png" alt="line" width={100} height={100} className="roadmap-slot" />
        </div>
        <div className="planet-image">
          <Image src={item.planet} alt="planet" width={100} height={100} className="planet" />
        </div>

        {item.mobileLine && (
          <div className={`planet-line planet-line-${index + 1}`}>
            <Image src={item.mobileLine} alt="line" width={100} height={100} />

            {index === 1 && (
              <div ref={shipMobileRef} className={`ship ${isShipVisible ? "ship-animated" : ""}`}>
                <Image src="/images/roadmap/ship.png" alt="ship" width={100} height={100} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapCardMobile;
