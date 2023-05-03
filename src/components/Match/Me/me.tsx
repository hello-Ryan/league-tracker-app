import { MeInfoProps } from "@/types";

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

  return (
    <div id="wrapper" className="flex flex-row">
      <div id="left" className="flex flex-col">
        <div id="me stats" className="flex flex-row">
          <div id="me champ stats">
            <div id="champion"></div>
            <div id="sums"></div>
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
