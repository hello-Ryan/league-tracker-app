export async function getStaticProps() {
  return {
    props: {
      context: "ShortMaker",
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { summonerName: "ShortMaker" } }],
    fallback: true,
  };
}

interface summonerNamePageProps {}

const summonerNamePage = (props: { context: any }) => {};

export default summonerNamePage;
