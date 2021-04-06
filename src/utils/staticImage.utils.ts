export const getCoinIconUrl = (ticker: string) =>
  `https://static.flexpool.io/assets/coinLogos/small/${ticker}.png`;

export const getOsLogoUrl = (os: 'linux' | 'windows' | 'hiveos') =>
  `https://static.flexpool.io/assets/os/${os}.png`;
