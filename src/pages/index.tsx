export async function getServerSideProps() {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.append("X-Riot-Token", process.env.API_KEY!);

  const data = await fetch(
    "https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/ShortMaker",
    {
      headers: requestHeaders,
    }
  ).then((x) => x.json());

  return {
    props: {
      data: data,
    },
  };
}

interface HomeProps {
  data: JSON;
}

export default function Home({ data }: HomeProps) {
  
  return <div className="text-red-400">{JSON.stringify(data)}</div>;
}
