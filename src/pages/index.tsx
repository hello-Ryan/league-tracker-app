import { MatchWrapper, Me, Participants } from "@/components/Match";
import { playerDataProps, Player, MeInfoProps } from "@/types";
import { match } from "assert";
import axios, { AxiosHeaderValue, all } from "axios";
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

  const test = endpoints.splice(0, 6);
  const a = await axios.all(test.map((a) => axios.get(a, requestHeaders)));
  const b = a.map((x) => x.data);

  const testMatch = await axios
    .get(endpoints[0], requestHeaders)
    .then((x) => x.data);

  return {
    props: {
      playerData: playerData,
      matches: b,
      testMatch: testMatch,
    },
  };
}

interface HomeProps {
  playerData: playerDataProps;
  matches: any;
  testMatch: any;
}

export default function Home({ playerData, testMatch, matches }: HomeProps) {
  const { id, puuid, name, profileIconId, revisionDate, summonerLevel } =
    playerData;

  const allMatchData = matches
    .map((match: any) => match.info.participants)
    .map((x: any) => x.find((p: any) => p.puuid === puuid))
    .map((me: any) => ({
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
      trinket: me.item6,
      runes: me.perks.styles,
      win: me.win,
    }));

  const participants = matches.map((match: any) => match.info.participants);

  return (
      <div className="flex flex-col items-center gap-3">
        {allMatchData.map((data: any, index: number) => (
          <MatchWrapper win={data.win} key={index}>
            <div className="flex justify-center">
              <Me meInfo={data} />
              <Participants participants={participants[index]} />
            </div>
          </MatchWrapper>
        ))}
      </div>
  );
}
