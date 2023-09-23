//import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import {
  BsFillFileTextFill,
  BsFillCameraReelsFill,
  BsVectorPen,
  BsBookHalf,
} from "react-icons/bs";
import { GiDualityMask } from "react-icons/gi";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Screen Play",
    icon: BsFillCameraReelsFill,
    href: "/screenPlay",
    description:
      "Easily craft and download cinematic masterpieces with AI scriptwriting!",
  },
  {
    label: "Stage Play",
    icon: GiDualityMask,
    href: "/stagePlay",
    description: "Ignite creativity with AI stage playwriting!",
  },
  {
    label: "Story",
    icon: BsBookHalf,
    color: "text-neutral-300",
    href: "/story",
    description:
      "Discover effortless storytelling with AI. Write, edit, and download with ease!",
  },

  {
    label: "Article",
    icon: BsFillFileTextFill,
    href: "/article",
    description:
      "SEO supercharged! Craft, expand, and download articles effortlessly with AI.",
  },
];
