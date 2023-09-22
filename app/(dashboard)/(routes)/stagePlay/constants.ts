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
    value: "full-Length-play",
    label: "Full-Length Play",
  },
  {
    value: "one-act-play",
    label: "One-Act Play",
  },
  {
    value: "short-play",
    label: "Short Play(Skit)",
  },
];
export const genreOptions = [
  { value: "drama", label: "Drama" },
  { value: "comedy", label: "Comedy" },
  { value: "tragedy", label: "Tragedy" },
  { value: "historical", label: "Historical" },
  { value: "musical", label: "Musical" },
  { value: "mystery", label: "Mystery" },
  { value: "thriller", label: "Thriller" },
  {
    value: "science-fiction",
    label: "Science Fiction",
  },
  { value: "fantasy", label: "Fantasy" },
  { value: "romance", label: "Romance" },
  { value: "political", label: "Political" },
  {
    value: "social-issues",
    label: "Social Issues",
    className: "text-xs prose-sm",
  },
  { value: "absurdist", label: "Absurdist" },
  { value: "epic", label: "Epic" },
  {
    value: "experimental",
    label: "Experimental/Avant-Garde",
    className: "text-xs prose-sm",
  },
  {
    value: "family",
    label: "Family/Children's",
    className: "text-xs prose-sm",
  },
  {
    value: "monologue",
    label: "Monologue/One-Person",
    className: "text-xs prose-sm",
  },
  {
    value: "meta-theatrical",
    label: "Meta-Theatrical",
    className: "text-xs prose-sm",
  },
  {
    value: "black-comedy",
    label: "Black Comedy",
    className: "text-xs prose-sm",
  },
  {
    value: "romantic-tragedy",
    label: "Romantic Tragedy",
    className: "text-xs prose-sm",
  },
  {
    value: "musical-revue",
    label: "Musical Revue",
    className: "text-xs prose-sm",
  },
];
