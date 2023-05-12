import { Player } from "@/types";
import Image from "next/image";

export interface ParticipantProps {
  participants: Player[];
}

const Participants = ({ participants }: ParticipantProps) => {
  const blueSide = participants.slice(0, 5);
  const redSide = participants.slice(5, 10);

  return (
    <div className="grid grid-cols-2 gap-1 grid-rows-5 grid-flow-col w-5/12">
      {blueSide.map((x: Player) => (
        <div
          key={x.summonerName}
          className="flex flex-row items-center text-xs"
        >
          <Image
            src={`/dragontail-13.9.1/13.9.1/img/champion/${x.championName}.png`}
            alt={x.championName}
            width={16}
            height={16}
            className="rounded-sm"
          />
          {x.summonerName.length > 10
            ? `${x.summonerName.substring(0, 7)}...`
            : x.summonerName}
        </div>
      ))}
      {redSide.map((x: Player) => (
        <div
          key={x.summonerName}
          className="flex flex-row items-center text-xs pl-1"
        >
          <Image
            src={`/dragontail-13.9.1/13.9.1/img/champion/${x.championName}.png`}
            alt={x.championName}
            width={16}
            height={16}
            className="rounded-sm"
          />
          {x.summonerName.length > 10
            ? `${x.summonerName.substring(0, 8)}...`
            : x.summonerName}
        </div>
      ))}
    </div>
  );
};

export default Participants;
