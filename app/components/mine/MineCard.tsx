import { useTranslations } from "next-intl";
import Image from "next/image";

type Mine = {
  image: string;
  title: string;
  text: string[];
  slot: string;
  imageSize: number;
  top: number;
};

type Props = {
  mine: Mine;
  className?: string;
};

const MineCard = ({ mine, className = "" }: Props) => {
  const t = useTranslations();
  return (
    <div className={`mine__card ${className}`}>
      <div className="mine__card--content">
        <h3 className="mine__card--title">{t(mine.title)}</h3>
        <ul className="mine__card--list">
          {mine.text.map((item, i) => (
            <li key={i}>{t(item)}</li>
          ))}
        </ul>
      </div>
      <div className="mine__card--picture">
        <Image src={mine.slot} alt="mine-slot" width={100} height={100} className="mine__card--slot" />
        <div className="mine__card--image" style={{ width: `${mine.imageSize}px`, top: `${mine.top}px` }}>
          <Image src={mine.image} alt="mine" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default MineCard;
