import { matchHistoryProps, playerDataProps } from "@/types";

export async function getServerSideProps() {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.append("X-Riot-Token", process.env.API_KEY!);

  const playerData: playerDataProps = await fetch(
    "https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/ShortMaker",
    {
      headers: requestHeaders,
    }
  ).then((x) => x.json());

  const matchArray: string[] = await fetch(
    `https://sea.api.riotgames.com/lol/match/v5/matches/by-puuid/${playerData.puuid}/ids`,
    { headers: requestHeaders }
  ).then((x) => x.json());

  const matches = matchArray.map((code: string) =>
    fetch(`https://sea.api.riotgames.com/lol/match/v5/matches/${code}`, {
      headers: requestHeaders,
    }).then((x) => x.json())
  );

  return {
    props: {
      playerData: playerData,
      matches: matches,
    },
  };
}

interface HomeProps {
  playerData: playerDataProps;
  matches: matchHistoryProps;
}

export default function Home({ playerData, matches }: HomeProps) {
  const { id, puuid, name, profileIconId, revisionDate, summonerLevel } =
    playerData;

  return <div className="text-red-400">{JSON.stringify(matches)}</div>;
}
