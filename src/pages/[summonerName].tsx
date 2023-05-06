export async function getStaticProps(context) {
  const summonerName = context.params.summonerName;
  return {
    props: {
      context: summonerName,
    },
  };
}
export async function getStaticPaths(context) {
  const summonerName = context.params.summonerName;

  return {
    paths: [{ params: { summonerName: summonerName } }],
    fallback: true,
  };
}

interface summonerNamePageProps {}

const summonerNamePage = (props: { context: any }) => {
  console.log(props.context);
};

export default summonerNamePage;
