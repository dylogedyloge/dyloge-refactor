import * as z from "zod";

export const typeOptions = [
  {
    value: "short-film",
    label: "Short Film",
  },
  {
    value: "feature-film",
    label: "Feature Film",
  },
  {
    value: "medium-Length-film",
    label: "Medium-Length Film",
  },
  {
    value: "mini-series",
    label: "Mini-Series",
  },
  {
    value: "serials",
    label: "Serials",
  },
];
export const genreOptions = [
  { value: "action", label: "Action" },
  { value: "adventure", label: "Adventure" },
  { value: "comedy", label: "Comedy" },
  { value: "drama", label: "Drama" },
  { value: "horror", label: "Horror" },
  { value: "fantasy", label: "Fantasy" },
  {
    value: "science-fiction",
    label: "Science Fiction",
  },
  { value: "mystery", label: "Mystery" },
  { value: "thriller", label: "Thriller" },
  { value: "romance", label: "Romance" },
  { value: "crime", label: "Crime" },
  { value: "animation", label: "Animation" },
  { value: "family", label: "Family" },
  { value: "music", label: "Music" },
  { value: "biography", label: "Biography" },
  { value: "history", label: "History" },
  {
    value: "documentary",
    label: "Documentary",
  },
  { value: "western", label: "Western" },
  { value: "war", label: "War" },
  { value: "fantasy", label: "Fantasy" },
  {
    value: "romantic-comedy",
    label: "Romantic Comedy",
  },
];

const characterSchema = z.object({
  name: z.string().max(80),
  age: z.string().max(80),
  description: z.string().max(120),
});

export const formSchema = z.object({
  type: z.enum(typeOptions.map((option) => option.value) as [string]),
  genre: z
    .array(z.enum(genreOptions.map((option) => option.value) as [string]))
    .max(3),
  characters: z.array(characterSchema).max(10),
});
