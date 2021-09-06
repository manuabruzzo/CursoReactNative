type Book = {
  id: number;
  title: string;
  author: string;
  publishDate: PublishDate[];
  plotTakePlaceYears: string[];
  bookCovers: BookCover[];
  characters: number[];
};

type BookCover = {
  id: number;
  country: Country;
  edition: Edition;
  artist: string;
  url: string;
};

export enum Country {
  Uk = 'UK',
  Us = 'US',
}

export enum Edition {
  The1St = '1st',
}

type PublishDate = {
  uk?: string;
  us?: string;
};

type Character = {
  id: number;
  name: string;
  birth: null | string;
  death: null | string;
  species: null | string;
  ancestry: null | string;
  gender: Gender | null;
  hairColor: null | string;
  eyeColor: null | string;
  wand: null | string;
  patronus: null | string;
  house: null | string;
  associatedGroups: string[];
  booksFeaturedIn: number[];
};

export enum Gender {
  AtLeastOneBoy = 'At least one boy',
  Female = 'Female',
  FemaleLikely = 'Female (likely)',
  Females = 'Females',
  FemalesMales = 'Females, Males',
  Male = 'Male',
  MaleLikely = 'Male (likely)',
  MaleMostLikely = 'Male (most likely)',
  Males = 'Males',
  MalesAndFemales = 'Males and females',
}
