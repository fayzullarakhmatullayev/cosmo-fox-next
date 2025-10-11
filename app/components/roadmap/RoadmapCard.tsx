import { ROADMAP } from "@/constants";
import Image from "next/image";
import { RefObject } from "react";

interface Props {
  item: (typeof ROADMAP)[number];
  index: number;
  t: (key: string) => string;
  isShipVisible: boolean;
  shipRef: RefObject<HTMLDivElement> | any;
}

const RoadmapCard = ({ item, index, t, isShipVisible, shipRef }: Props) => {
  return (
    <div className={`roadmap-item ${index % 2 === 0 ? "top" : "bottom"} planet-${index + 1}`}>
      <div className="planet-wrapper">
        <div className="planet-card">
          <h3>{t(item.date)}</h3>
          <p>{t(item.text)}</p>

          <Image src="/images/roadmap/roadmap-slot.png" alt="line" width={100} height={100} className="roadmap-slot" />
        </div>
        <div className="planet-image">
          <Image src={item.planet} alt="planet" width={100} height={100} className="planet" />
        </div>

        {item.line && (
          <div className="planet-line">
            <Image src={item.line} alt="line" width={100} height={100} />

            {index === 1 && (
              <div ref={shipRef} className={`ship ${isShipVisible ? "ship-animated" : ""}`}>
                <Image src="/images/roadmap/ship.png" alt="ship" width={100} height={100} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapCard;
