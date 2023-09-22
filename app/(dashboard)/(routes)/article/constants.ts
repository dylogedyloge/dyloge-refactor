import * as z from "zod";

const keywordsSeparatedByComma = z.string().refine(
  (keywords) => {
    const keywordArray = keywords.split(",").map((keyword) => keyword.trim());
    return (
      keywordArray.length > 0 && keywordArray.every((keyword) => keyword !== "")
    );
  },
  {
    message: "Keywords should be separated by commas (,)",
  }
);

const formSchema = z.object({
  topic: z.string().min(1).max(80),
  keywords: keywordsSeparatedByComma.refine(
    (keywords) => keywords.length <= 80,
    {
      message: "Keywords should not exceed 80 characters in total.",
    }
  ),
});

export { formSchema };
