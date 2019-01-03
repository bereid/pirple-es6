/*
*  Create a program that log the attributes of my favourite song to the console.
*  For extra credit there is a functional constructor which generates it automatically.
*  There are simple- and multiline comments for extra credits too.
*/

// Do it with simple variables

let artist = 'Justin Timberlake';
let title = 'Sexy back';
let duration = 286;
let genre = 'pop';
let wonAward = true;
let hasBeenOnChartList = true;
let suitsInOfficialVideo = 3;
let girlsInOfficialVideo = 100;

console.log(`
My favourite song is ${title} from ${artist}, 
which is a ${duration}-second long ${genre} track.
In the video clip there are ${girlsInOfficialVideo} pretty girls dancing with
${artist}, who wore ${suitsInOfficialVideo} different suits.`)

// Do it with functional constructor

function FavouriteSong(artist, title, duration, genre, youtubeWatch, featers) {
  this.artist = artist;
  this.title = title;
  this.duration = duration;
  this.genre = genre;
  this.youtubeWatch = youtubeWatch;
  this.featers = featers;
  this.description = function () {
    console.log(`
    My favourite song is ${this.title} from ${this.artist}, 
    which is a ${this.duration}-second long ${this.genre} track.
    The song is made with several featurers, like ${this.featers}
    and the clip reached the ${youtubeWatch} watch on YouTube.`)
  };
};

let favouriteRapSong = new FavouriteSong('Dr. Dre', 'The next episode', 199, 'rap', 354104277, ['Snoop Dogg', ' Kurupt', ' Nate Dogg']);
let favouritePopSong = new FavouriteSong('Timbaland', 'Morning After Dark', 237, 'pop', 106067338, ['Nelly Furtado', ' Soshy']);
favouriteRapSong.description();
favouritePopSong.description();