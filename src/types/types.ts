export interface Player {
    summonerName: string;
    championName: string;
  }

export interface MeInfoProps {
  championName: string;
  kills: number;
  deaths: number;
  assists: number;
  summoner1: number;
  summoner2: number;
  item0: number,
  item1: number,
  item2: number,
  item3: number,
  item4: number,
  item5: number,
  trinket: number,
  runes: any
}