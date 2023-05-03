import { MeInfoProps } from "@/types";
import Image from "next/image";
import sumData from "@/../public/dragontail-13.9.1/13.9.1/en_AU/summoner.json";

export interface MeProps {
  meInfo: MeInfoProps;
}

const Me = ({ meInfo }: MeProps) => {
  const {
    championName,
    kills,
    deaths,
    assists,
    summoner1,
    summoner2,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    runes,
  } = meInfo;

  const { data }: any = sumData;
  const spellNames = Object.keys(data);
  const dSum = spellNames.find(
    (x: any) => data[x].key === summoner1.toString()
  );
  const fSum = spellNames.find(
    (x: any) => data[x].key === summoner2.toString()
  );

  return (
    <div id="wrapper" className="flex flex-row">
      <div id="left" className="flex flex-col">
        <div id="me stats" className="flex flex-row">
          <div id="me champ stats" className="flex flex-row">
            <div id="champion">
              <Image
                src={`/dragontail-13.9.1/13.9.1/img/champion/${championName}.png`}
                alt={championName}
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div id="sums" className="flex flex-col align-middle">
              <Image
                src={`/dragontail-13.9.1/13.9.1/img/spell/${dSum}.png`}
                alt={championName}
                width={24}
                height={24}
                className="rounded-full"
              />
              <Image
                src={`/dragontail-13.9.1/13.9.1/img/spell/${fSum}.png`}
                alt={championName}
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
            <div id="runes"></div>
          </div>
          <div id="kda"></div>
        </div>
        <div id="items"></div>
      </div>
      <div id="right" className="flex flex-col">
        {/* cs cs-perminute */}
      </div>
    </div>
  );
};

export default Me;
