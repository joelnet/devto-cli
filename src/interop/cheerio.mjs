import cheerio from 'cheerio';
import pipe from 'mojiscript/core/pipe';
import map from 'mojiscript/list/map';

export const getElements = selector => pipe ([
  cheerio.load,
  $ => $ (selector),
  $articles => $articles.toArray (),
  map (cheerio)
])
