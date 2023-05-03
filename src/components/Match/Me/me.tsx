import { MeInfoProps } from "@/types";
import Image from "next/image";
import sumsData from "@/../public/dragontail-13.9.1/13.9.1/en_AU/summoner.json";
import runesData from "@/../public/dragontail-13.9.1/13.9.1/en_AU/runesReforged.json";

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
  // "perks": {
  //   "statPerks": { "defense": 5002, "flex": 5008, "offense": 5005 },
  //   "styles": [
  //     {
  //       "description": "primaryStyle",
  //       "selections": [
  //         { "perk": 8437, "var1": 525, "var2": 313, "var3": 0 },
  //         { "perk": 8401, "var1": 450, "var2": 0, "var3": 0 },
  //         { "perk": 8473, "var1": 658, "var2": 0, "var3": 0 },
  //         { "perk": 8242, "var1": 54, "var2": 0, "var3": 0 }
  //       ],
  //       "style": 8400
  //     },
  //     {
  //       "description": "subStyle",
  //       "selections": [
  //         { "perk": 8345, "var1": 3, "var2": 0, "var3": 0 },
  //         { "perk": 8304, "var1": 11, "var2": 1, "var3": 5 }
  //       ],
  //       "style": 8300
  //     }
  //   ]
  // },

  const spellNames = Object.keys(sumsData);
  const dSum = spellNames.find(
    (x: any) => sumsData[x].key === summoner1.toString()
  );
  const fSum = spellNames.find(
    (x: any) => sumsData[x].key === summoner2.toString()
  );

  const keyStoneTree = runesData.find((x:any) => x.id === runes[0].style)?.slots[0].runes[0].icon
  const secondaryTree = runesData.find((x:any) => x.id === runes[1].style)?.icon

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
                alt={dSum!}
                width={24}
                height={24}
                className="rounded-full"
              />
              <Image
                src={`/dragontail-13.9.1/13.9.1/img/spell/${fSum}.png`}
                alt={fSum!}
                width={24}
                height={24}
                className="rounded-full"
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
