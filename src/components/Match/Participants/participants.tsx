import { Player } from "@/types";
import Image from "next/image";

export interface ParticipantProps {
  participants: Player[];
}

const Participants = ({ participants }: ParticipantProps) => {
  const blueSide = participants.slice(0, 5);
  const redSide = participants.slice(5, 10);

  return (
    <div className="grid grid-cols-2 gap-1 grid-rows-5 grid-flow-col">
      {blueSide.map((x: Player) => (
        <div key={x.playerName} className="flex flex-row items-center">
          <Image
            src={`/dragontail-13.9.1/13.9.1/img/champion/${x.championName}.png`}
            alt={x.championName}
            width={24}
            height={24}
            className="rounded-full"
          />
          {x.playerName}
        </div>
      ))}
      {redSide.map((x: Player) => (
        <div key={x.playerName} className="flex flex-row items-center">
          <Image
            src={`/dragontail-13.9.1/13.9.1/img/champion/${x.championName}.png`}
            alt={x.championName}
            width={24}
            height={24}
            className="rounded-full"
          />
          {x.playerName}
        </div>
      ))}
    </div>
  );
};

export default Participants;
