import hanuman from "../assets/movie_thumbnail/hanuman.webp";
import ms_dhoni from "../assets/movie_thumbnail/ms-dhoni.webp";
import lootere from "../assets/movie_thumbnail/lootere.webp";
import heart_beat from "../assets/movie_thumbnail/heart-beat.webp";
import cutputlli from "../assets/movie_thumbnail/cutputlli.webp";

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
