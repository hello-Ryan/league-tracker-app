import { Me, Participants } from "@/components/Match";
import { playerDataProps, Player, MeInfoProps } from "@/types";
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

export default function Home({ playerData, testMatch }: HomeProps) {
  const { id, puuid, name, profileIconId, revisionDate, summonerLevel } =
    playerData;

  const participants: Player[] = [];

  testMatch.info.participants.map((x: any) =>
    participants.push({
      playerName: x.summonerName,
      championName: x.championName,
    })
  );

  const me = testMatch.info.participants.filter(
    (x: any) => x.puuid === puuid
  )[0];

  const meInfo = {
    championName: me.championName,
    kills: me.kills,
    deaths: me.deaths,
    assists: me.assists,
    summoner1: me.summoner1Id,
    summoner2: me.summoner2Id,
    item0: me.item0,
    item1: me.item1,
    item2: me.item2,
    item3: me.item3,
    item4: me.item4,
    item5: me.item5,
    item6: me.item6,
    runes: me.perks.styles,
  };

  return (
    <div>
      <div className="flex justify-center">
        <>
          <Me meInfo={meInfo} />
          <Participants participants={participants} />
        </>
      </div>
    </div>
  );
}
