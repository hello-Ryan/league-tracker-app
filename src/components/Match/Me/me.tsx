import { MeInfoProps } from "@/types";
import Image from "next/image";
import sumsData from "@/../public/dragontail-13.9.1/13.9.1/en_AU/summoner.json";
import runesData from "@/../public/dragontail-13.9.1/13.9.1/en_AU/runesReforged.json";
import ItemContainer from "../ItemContainer/ItemContainer";

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
    trinket,
    runes,
  } = meInfo;
  const spellNames = Object.keys(sumsData);
  const dSum = spellNames.find(
    (x: any) => sumsData[x].key === summoner1.toString()
  );
  const fSum = spellNames.find(
    (x: any) => sumsData[x].key === summoner2.toString()
  );

  const keyStoneTree = runesData.find((x: any) => x.id === runes[0].style)
    ?.slots[0].runes[0].icon;
  const secondaryTree = runesData.find(
    (x: any) => x.id === runes[1].style
  )?.icon;

  return (
    <div id="wrapper" className="flex flex-row">
      <div id="left" className="flex flex-col justify-center">
        <div id="me champ stats" className="flex flex-row items-center">
          <div id="champion">
            <Image
              src={`/dragontail-13.9.1/13.9.1/img/champion/${championName}.png`}
              alt={championName}
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div id="sums" className="flex flex-col">
            <Image
              src={`/dragontail-13.9.1/13.9.1/img/spell/${dSum}.png`}
              alt={dSum!}
              width={24}
              height={24}
              className="rounded-md"
            />
            <Image
              src={`/dragontail-13.9.1/13.9.1/img/spell/${fSum}.png`}
              alt={fSum!}
              width={24}
              height={24}
              className="rounded-md"
            />
          </div>
          <div id="runes">
            <Image
              src={`/dragontail-13.9.1/img/${keyStoneTree}`}
              alt={championName}
              width={24}
              height={24}
              className="rounded-full"
            />
            <Image
              src={`/dragontail-13.9.1/img/${secondaryTree}`}
              alt={championName}
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
          <div id="kda" className="">
            <span className="text-lg">{kills}</span>
            <span className="text-lg text-gray-500"> / </span>
            <span className="text-red-500 text-lg">{deaths}</span>
            <span className="text-lg text-gray-500"> / </span>
            <span className="text-lg">{assists}</span>

            <div className="text-xs flex justify-center">{`${Math.round(
              (kills + assists) / deaths
            )} KDA`}</div>
          </div>
        </div>
        <ItemContainer
          trinket={trinket}
          item0={item0}
          item1={item1}
          item2={item2}
          item3={item3}
          item4={item4}
          item5={item5}
        />
      </div>
      <div id="right" className="flex flex-col"></div>
    </div>
  );
};

export default Me;
