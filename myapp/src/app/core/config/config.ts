let movieBase = 'https://api.themoviedb.org/3/';
let deckbase = 'https://deckofcardsapi.com/api/deck/';
export  const CONFIG  = {
    apiUrls:{
     apiKey:'2eabdeb3ec19cb7abc472ac8bae0bd10',
     popularMovie:movieBase+"movie/popular",
     moviebyId:movieBase+"movie",
     newDeck:deckbase+'new/shuffle/?deck_count=1',
     drawDeck:deckbase,
    }

};