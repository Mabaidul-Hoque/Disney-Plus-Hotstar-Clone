import hanuman from "../assets/movie_thumbnail/hanuman.webp";
import ms_dhoni from "../assets/movie_thumbnail/ms-dhoni.webp";
import lootere from "../assets/movie_thumbnail/lootere.webp";
import heart_beat from "../assets/movie_thumbnail/heart-beat.webp";
import cutputlli from "../assets/movie_thumbnail/cutputlli.webp";
import bahubali from "../assets/movie_thumbnail/bahubali.webp";
import patna_shukla from "../assets/movie_thumbnail/patna-shukla.webp";
import rama_seta from "../assets/movie_thumbnail/rama-seta.webp";
import aryaya from "../assets/movie_thumbnail/aryaya.webp";
import criminal_justice from "../assets/movie_thumbnail/criminal_justice.webp";
import bigboss_malayalam from "../assets/movie_thumbnail/bigboss_malayalam.webp";

export interface TrendingShows {
  id: number;
  title: string;
  poster: string;
  releaseDate: string;
  duration?: string;
  plot: string;
  genre: string[];
  certificate: string;
  language: string[];
  type: string;
  season?: number;
  titleColor: string;
}

export const trendingShows = [
  {
    id: 1,
    title: "Lootere",
    poster: lootere,
    releaseDate: "2024",
    duration: "",
    plot: "The show is about Somalian pirates (no, they aren't as goofy as Captain Jack Sparrow) who otherwise live pitiful lives. It is reportedly based on the true incident of 2017 when an Indian ship was similarly hijacked on Somalian waters by pirates.",
    genre: ["Drama", "Action", "Thriller"],
    certificate: "A",
    language: [
      "Hindi",
      "Telugu",
      "Tamil",
      "Bengali",
      "Malayalam",
      "Marathi",
      "Kannada",
    ],
    type: "tv",
    season: 1,
    titleColor: "text-sky-500",
  },

  {
    id: 2,
    title: "Ms Dhoni",
    poster: ms_dhoni,
    releaseDate: "2016",
    duration: "2h 58m",
    plot: "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
    genre: ["Biopic"],
    certificate: "U",
    language: ["Hindi"],
    type: "movie",
    titleColor: "text-yellow-600",
  },
  {
    id: 3,
    title: "Hanuman",
    poster: hanuman,
    releaseDate: "2024",
    duration: "2h 38m",
    plot: "Set in a fictional place called Anjanadri, the film follows the story of Hanumanthu, who gets the power of Lord Hanuman to save the people of Anjanadri, and faces off against Michael after coming in contact with a mysterious gem.",
    genre: ["Action", "Fantasy", "Good vs Evil"],
    certificate: "U/A 13+",
    language: ["Tamil", "Malayalam", "Kannada"],
    type: "movie",
    titleColor: "text-orange-500",
  },
  {
    id: 4,
    title: "Heart Beat",
    poster: heart_beat,
    releaseDate: "2024",
    duration: "",
    plot: "Five new doctors join RK Hospitals. On the very first day, things go from bad to worse for Reena, making a poor impression on chief doctor Radhi. Reena and Rocky are tasked to work with Dr Ramanadhan, aka Cinema Doctor. The doctors are in a tizzy when a child ends up with breathing issues that they can't diagnose.",
    genre: ["Drama"],
    certificate: "U/A 16+",
    language: ["Tamil"],
    type: "tv",
    season: 1,
    titleColor: "text-red-600",
  },
  {
    id: 5,
    title: "Cutputlli",
    poster: cutputlli,
    releaseDate: "2022",
    duration: "2h 14m",
    plot: "The corpse of 15-year-old student Samiksha, who was brutally murdered, is discovered. Arjan Sethi is an aspiring filmmaker who wants to make a film on Psychopaths.",
    genre: ["Mystery", "Thriller", "Action"],
    certificate: "U/A 16+",
    language: ["Hindi"],
    titleColor: "text-gray-400",
    type: "movie",
  },
];

export const trendingMovies = [
  {
    id: 1,
    title: "Rama Seta",
    poster: rama_seta,
    releaseDate: "2022",
    duration: "2h 33m",
    plot: "Upon returning to Pakistan, Afreen sets off to fulfil her grandfather's wish of delivering a letter from Ram to Sita. Along the way, she finds Ram and learns about their love story.",
    genre: ["Drama", "Romance", "Tragedy"],
    certificate: "A",
    language: ["Hindi"],
    type: "movie",
    titleColor: "text-sky-500",
  },

  {
    id: 2,
    title: "Patna Shukla",
    poster: patna_shukla,
    releaseDate: "2024",
    duration: "2h 58m",
    plot: "A common woman's, uncommon fight and grit.",
    genre: ["Drama", "Legal", "Intense"],
    certificate: "U",
    language: ["Hindi"],
    type: "movie",
    titleColor: "text-yellow-600",
  },
  {
    id: 3,
    title: "Hanuman",
    poster: hanuman,
    releaseDate: "2024",
    duration: "2h 38m",
    plot: "Set in a fictional place called Anjanadri, the film follows the story of Hanumanthu, who gets the power of Lord Hanuman to save the people of Anjanadri, and faces off against Michael after coming in contact with a mysterious gem.",
    genre: ["Action", "Fantasy", "Good vs Evil"],
    certificate: "U/A 13+",
    language: ["Tamil", "Malayalam", "Kannada"],
    type: "movie",
    titleColor: "text-orange-500",
  },
  {
    id: 4,
    title: "Bahubali",
    poster: bahubali,
    releaseDate: "2017",
    duration: "2h 40m",
    plot: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    genre: ["Action", "Fantasy", "Mystery"],
    certificate: "U/A 16+",
    language: ["Tamil"],
    type: "movie",
    titleColor: "text-red-600",
  },
  {
    id: 5,
    title: "Cutputlli",
    poster: cutputlli,
    releaseDate: "2022",
    duration: "2h 14m",
    plot: "The corpse of 15-year-old student Samiksha, who was brutally murdered, is discovered. Arjan Sethi is an aspiring filmmaker who wants to make a film on Psychopaths.",
    genre: ["Mystery", "Thriller", "Action"],
    certificate: "U/A 16+",
    language: ["Hindi"],
    titleColor: "text-gray-400",
    type: "movie",
  },
];

export const trendingTVSeries = [
  {
    id: 1,
    title: "Aarya",
    poster: aryaya,
    releaseDate: "2024",
    duration: "",
    plot: "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
    genre: ["Action", "Drama", "Revenge"],
    certificate: "U",
    language: ["Hindi", "Bengali", "Tamil", "Telugu", "Kananda", "Malayalam"],
    type: "tv",
    season: 3,
    titleColor: "text-yellow-600",
  },
  {
    id: 2,
    title: "Lootere",
    poster: lootere,
    releaseDate: "2024",
    duration: "",
    plot: "The show is about Somalian pirates (no, they aren't as goofy as Captain Jack Sparrow) who otherwise live pitiful lives. It is reportedly based on the true incident of 2017 when an Indian ship was similarly hijacked on Somalian waters by pirates.",
    genre: ["Drama", "Action", "Thriller"],
    certificate: "A",
    language: [
      "Hindi",
      "Telugu",
      "Tamil",
      "Bengali",
      "Malayalam",
      "Marathi",
      "Kannada",
    ],
    type: "tv",
    season: 1,
    titleColor: "text-sky-500",
  },
  {
    id: 3,
    title: "Bigboss Malayalam",
    poster: bigboss_malayalam,
    releaseDate: "2024",
    duration: "",
    plot: "Set in a fictional place called Anjanadri, the film follows the story of Hanumanthu, who gets the power of Lord Hanuman to save the people of Anjanadri, and faces off against Michael after coming in contact with a mysterious gem.",
    genre: ["Reality", "Celebrities"],
    certificate: "U/A 13+",
    language: ["Tamil", "Malayalam", "Kannada"],
    type: "tv",
    season: 1,
    titleColor: "text-orange-500",
  },
  {
    id: 4,
    title: "Heart Beat",
    poster: heart_beat,
    releaseDate: "2024",
    duration: "",
    plot: "Five new doctors join RK Hospitals. On the very first day, things go from bad to worse for Reena, making a poor impression on chief doctor Radhi. Reena and Rocky are tasked to work with Dr Ramanadhan, aka Cinema Doctor. The doctors are in a tizzy when a child ends up with breathing issues that they can't diagnose.",
    genre: ["Drama"],
    certificate: "U/A 16+",
    language: ["Tamil"],
    type: "tv",
    season: 1,
    titleColor: "text-red-600",
  },
  {
    id: 5,
    title: "Criminal Justice",
    poster: criminal_justice,
    releaseDate: "2022",
    duration: "",
    plot: "The corpse of 15-year-old student Samiksha, who was brutally murdered, is discovered. Arjan Sethi is an aspiring filmmaker who wants to make a film on Psychopaths.",
    genre: ["Mystery", "Thriller", "Crime", "Drama"],
    certificate: "U/A 16+",
    language: ["Hindi", "Bengali", "Tamil", "Telugu", "Kananda", "Malayalam"],
    titleColor: "text-gray-400",
    type: "tv",
    season: 1,
  },
];
