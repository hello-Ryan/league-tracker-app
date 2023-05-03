import { playerDataProps } from "@/types";
import axios, { AxiosHeaderValue } from "axios";

export async function getServerSideProps() {
  const requestHeaders = { headers: { "X-Riot-Token": process.env.API_KEY! } };

  const playerData: playerDataProps = await axios
    .get(
      "https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/ShortMaker",
      requestHeaders
    )
    .then((x) => x.data)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

  const matches: string[] = await axios
    .get(
      `https://sea.api.riotgames.com/lol/match/v5/matches/by-puuid/${playerData.puuid}/ids`,
      requestHeaders
    )
    .then((x) => x.data)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  const testMatch = await axios
    .get(
      `https://sea.api.riotgames.com/lol/match/v5/matches/${matches[0]}`,
      requestHeaders
    )
    .then((x) => x.data)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  return {
    props: {
      playerData: playerData,
      matches: matches,
      testMatch: testMatch,
    },
  };
}

interface HomeProps {
  playerData: playerDataProps;
  testMatch: any;
}

interface Player {
  puuid: string;
  icon: number;
}

export default function Home({ playerData, testMatch }: HomeProps) {
  const { id, puuid, name, profileIconId, revisionDate, summonerLevel } =
    playerData;

  const participants: Player[] = [];

  testMatch.info.participants.map((x: any) =>
    participants.push({
      puuid: x.summonerName,
      icon: x.profileIcon,
    })
  );

  return (
    <div className="text-red-400">
      <ul>
        {participants.map((p: Player) => (
          <li key={p.puuid}>{`${p.puuid} and ${p.icon}`}</li>
        ))}
      </ul>
    </div>
  );
}
