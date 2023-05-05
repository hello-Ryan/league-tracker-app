import { MatchWrapper, Me, Participants } from "@/components/Match";
import { playerDataProps, Player, MeInfoProps } from "@/types";
import { match } from "assert";
import axios, { AxiosHeaderValue } from "axios";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const requestHeaders = { headers: { "X-Riot-Token": process.env.API_KEY! } };

  const playerData: playerDataProps = await axios
    .get(
      "https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/ShortMaker",
      requestHeaders
    )
    .then((x) => x.data);

  const matches: string[] = await axios
    .get(
      `https://sea.api.riotgames.com/lol/match/v5/matches/by-puuid/${playerData.puuid}/ids`,
      requestHeaders
    )
    .then((x) => x.data);

  const endpoints = matches.map(
    (id) => `https://sea.api.riotgames.com/lol/match/v5/matches/${id}`
  );

  return {
    props: {
      playerData: playerData,
      matches: endpoints,
    },
  };
}

interface HomeProps {
  playerData: playerDataProps;
  matches: string[];
}

export default function Home({ playerData, matches }: HomeProps) {
  const { id, puuid, name, profileIconId, revisionDate, summonerLevel } =
    playerData;
    const requestHeaders = { headers: { "X-Riot-Token": process.env.API_KEY! } };

  const participants: Player[] = [];

  const [myMatches, setMyMatches] = useState([])

  console.log(matches)

  useEffect(() => {
    const fetchData = async () => {
      for (const url of matches) {
        const response = await axios.get(url,requestHeaders);
        const newMyMatches = [...myMatches, response.data];
        setMyMatches(newMyMatches);
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 0.5 seconds
      }
    };

    fetchData();
  }, []); 


  // testMatch.info.participants.map((x: any) =>
  //   participants.push({
  //     playerName: x.summonerName,
  //     championName: x.championName,
  //   })
  // );

  // const me = testMatch.info.participants.filter(
  //   (x: any) => x.puuid === puuid
  // )[0];

  // const meInfo = {
  //   championName: me.championName,
  //   kills: me.kills,
  //   deaths: me.deaths,
  //   assists: me.assists,
  //   summoner1: me.summoner1Id,
  //   summoner2: me.summoner2Id,
  //   item0: me.item0,
  //   item1: me.item1,
  //   item2: me.item2,
  //   item3: me.item3,
  //   item4: me.item4,
  //   item5: me.item5,
  //   trinket: me.item6,
  //   runes: me.perks.styles,
  // };

  return (
    // <div className="flex flex-row justify-center">
    //   <MatchWrapper win={me.win} className="flex justify-center">
    //     <>
    //       <Me meInfo={meInfo} />
    //       <Participants participants={participants} />
    //     </>
    //   </MatchWrapper>
    // </div>
    <div>
      {myMatches.length}
    </div>
  );
}
