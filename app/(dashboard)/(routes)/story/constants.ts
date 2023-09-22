import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Photo prompt is required",
  }),
  genre: z.string().min(1),

  type: z.string().min(1),
});

export const typeOptions = [
  {
    value: "flash-fiction",
    label: "Flash Fiction",
  },
  {
    value: "short-story",
    label: "Short Story",
  },
  {
    value: "novelette",
    label: "Novelette",
  },
  {
    value: "short-play",
    label: "Novella",
  },
  {
    value: "novel",
    label: "Novel",
  },
  {
    value: "epic-novel",
    label: "Epic Novel",
  },
  {
    value: "serial",
    label: "Serial",
  },
  {
    value: "microfiction",
    label: "Microfiction",
  },
];
export const genreOptions = [
  { value: "romance", label: "Romance" },
  { value: "crime", label: "Crime" },
  { value: "mystery", label: "Mystery" },
  { value: "thriller", label: "Thriller" },
  {
    value: "science-fiction",
    label: "Science Fiction",
  },
  { value: "fantasy", label: "Fantasy" },
  {
    value: "historical-fiction",
    label: "Historical Fiction",
  },
  {
    value: "literary-fiction",
    label: "Literary Fiction",
  },
  { value: "horror", label: "Horror" },
  {
    value: "young-adult",
    label: "Young Adult",
  },
  { value: "children", label: "Children" },
  { value: "adventure", label: "Adventure" },
  { value: "action", label: "Action" },
  {
    value: "urban-fiction",
    label: "Urban Fiction",
  },
  { value: "dystopian", label: "Dystopian" },
  {
    value: "paranormal-romance",
    label: "Paranormal Romance",
  },
  { value: "comedy", label: "Comedy" },
  {
    value: "magical-realism",
    label: "Magical Realism",
  },
  { value: "suspense", label: "Suspense" },
  { value: "detective", label: "Detective" },
];
