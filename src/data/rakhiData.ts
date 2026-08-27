import ambient from "@/assets/ambient-hero.jpg.asset.json";
import family from "@/assets/family.jpg.asset.json";
import memoryA from "@/assets/memory-a.jpg.asset.json";
import memoryB from "@/assets/memory-b.jpg.asset.json";
import memoryC from "@/assets/memory-c.jpg.asset.json";
import memoryD from "@/assets/memory-d.jpg.asset.json";
import rakhiImg from "@/assets/rakhi.jpg.asset.json";

export const images = {
  ambient: ambient.url,
  family: family.url,
  rakhi: rakhiImg.url,
  memoryA: memoryA.url,
  memoryB: memoryB.url,
  memoryC: memoryC.url,
  memoryD: memoryD.url,
};

export type Memory = {
  src: string;
  title: string;
  caption: string;
  date: string;
};

export type Sister = {
  id: string;
  flower: string;
  name: string;
  nickname: string;
  intro: string[];
  special: string[];
  specialClose: string;
  memories: Memory[];
  unsaidThings: string[];
  promises: string[];
  letter: { greeting: string; paragraphs: string[]; signoff: string };
  farewell: string;
};

const sharedMemories: Memory[] = [
  {
    src: images.memoryC,
    title: "The Diya Years",
    caption: "Every festival started the same way — you lighting one, me pretending I lit it better.",
    date: "Childhood",
  },
  {
    src: images.memoryB,
    title: "Sunlit Afternoons",
    caption: "Ordinary days that somehow turned into the ones I remember best.",
    date: "School years",
  },
  {
    src: images.memoryA,
    title: "Two Small Lights",
    caption: "Two of us in a very dark room, refusing to be scared separately.",
    date: "Growing up",
  },
  {
    src: images.memoryD,
    title: "The Thread",
    caption: "Something thin, something soft, holding more weight than it should be able to.",
    date: "Every year since",
  },
];

export const rakhiData: { sister1: Sister; sister2: Sister } = {
  sister1: {
    id: "one",
    flower: "🌸",
    name: "Sister One",
    nickname: "Didi",
    intro: [
      "Before you continue, I want you to know something.",
      "I couldn't buy you the gift I normally would. And honestly, that bothered me.",
      "But then I realised… maybe a gift doesn't have to cost money to mean something.",
      "So I made this. Every part of it is for you.",
    ],
    special: [
      "You have been part of more chapters of my life than you probably realise.",
      "You've seen versions of me that almost nobody else has.",
      "We've laughed.",
      "We've argued.",
      "We've annoyed each other.",
      "We've grown.",
      "And somehow, you're still one of the people I can call family.",
    ],
    specialClose: "I don't say it enough, but I'm grateful you're my sister.",
    memories: sharedMemories,
    unsaidThings: [
      "I don't always know how to say what I feel.",
      "Sometimes I act like I don't care as much as I actually do.",
      "I notice more of the things you do for me than I probably ever tell you.",
      "Even when we disagree, you're still my sister.",
      "And that bond means more to me than I usually know how to explain.",
    ],
    promises: [
      "I promise to celebrate your happiness.",
      "I promise to annoy you for the rest of my life.",
      "I promise to be proud of the person you become.",
      "I promise that growing older won't mean growing apart.",
      "And whenever life gets difficult, I hope you'll remember that you don't have to face everything alone.",
    ],
    letter: {
      greeting: "Dear Didi,",
      paragraphs: [
        "I started writing this three times and deleted it twice, which is probably the most honest thing I can tell you about how I feel.",
        "You were the first person who made growing up feel less like something happening to me and more like something we were doing together. You covered for me. You corrected me. You told me the truth when it would have been easier not to.",
        "I don't think I've ever properly thanked you for that. So — thank you. For the patience, for the arguments that were really just concern in a louder voice, for every time you noticed something was wrong before I said a word.",
        "Wherever life takes you this year, I hope it's kind to you. And if it isn't, I hope you remember that you have a brother who is permanently, stubbornly on your side.",
      ],
      signoff: "Always, your brother.",
    },
    farewell:
      "You were expecting a gift from your brother. But the truth is — having you as my sister has always been one of my gifts.",
  },
  sister2: {
    id: "two",
    flower: "🌼",
    name: "Sister Two",
    nickname: "Chhoti",
    intro: [
      "Before you continue, I want you to know something.",
      "I couldn't buy you the gift I normally would. And honestly, that bothered me.",
      "But then I realised… maybe a gift doesn't have to cost money to mean something.",
      "So I made this. Every part of it is for you.",
    ],
    special: [
      "You have been part of more chapters of my life than you probably realise.",
      "You've seen versions of me that almost nobody else has.",
      "We've laughed.",
      "We've argued.",
      "We've annoyed each other.",
      "We've grown.",
      "And somehow, you're still one of the people I can call family.",
    ],
    specialClose: "I don't say it enough, but I'm grateful you're my sister.",
    memories: sharedMemories,
    unsaidThings: [
      "I don't always know how to say what I feel.",
      "Sometimes I act like I don't care as much as I actually do.",
      "I notice more of the things you do for me than I probably ever tell you.",
      "Even when we disagree, you're still my sister.",
      "And that bond means more to me than I usually know how to explain.",
    ],
    promises: [
      "I promise to celebrate your happiness.",
      "I promise to annoy you for the rest of my life.",
      "I promise to be proud of the person you become.",
      "I promise that growing older won't mean growing apart.",
      "And whenever life gets difficult, I hope you'll remember that you don't have to face everything alone.",
    ],
    letter: {
      greeting: "Dear Chhoti,",
      paragraphs: [
        "You've spent most of your life being the youngest in a house full of louder people, and somehow you still ended up being the one who notices everything.",
        "I know I tease you more than I compliment you. That's a habit, not an opinion. The opinion is that you are braver, funnier and far more capable than you give yourself credit for.",
        "I've watched you turn into someone with her own mind, her own taste, her own way of arguing with me that is annoyingly effective. It's been one of the quiet joys of my life.",
        "So this year, instead of something wrapped in paper, here's something wrapped in time. Keep it. Open it when you need to remember that someone was paying attention.",
      ],
      signoff: "Always, your brother.",
    },
    farewell:
      "You were expecting a gift from your brother. But the truth is — having you as my sister has always been one of my gifts.",
  },
};

export const finalChapter = {
  heading: "Open this again someday.",
  body: [
    "Maybe years from now you'll find this again.",
    "We'll both be older. Life will probably look very different.",
    "But I hope this little piece of today reminds you of one thing:",
    "before everything changed, we were here.",
    "Two sisters. One brother. One lifetime of memories.",
  ],
};

export const timeline = [
  { year: "Then", title: "Childhood", caption: "Shared rooms, shared blame, shared everything.", src: images.memoryC },
  { year: "Later", title: "School years", caption: "Different classrooms, same walk home.", src: images.memoryB },
  { year: "After", title: "Growing up", caption: "We started becoming people instead of siblings only.", src: images.memoryD },
  { year: "Always", title: "Family moments", caption: "The evenings nobody photographed and everybody remembers.", src: images.memoryA },
  { year: "2026", title: "Today — Raksha Bandhan", caption: "One thread, two sisters, one brother.", src: images.rakhi },
  { year: "Next", title: "The future", caption: "Unwritten, and still ours.", src: images.family },
];

export const timelineClose =
  "Whatever changes, wherever life takes us, I hope this part never changes.";

/** Drop a royalty-free track in /public and set the path here, e.g. "/music/ambience.mp3" */
export const musicSrc: string | null = null;

export const chapters = [
  "Before You Open This",
  "Why You're Special",
  "Our Memories",
  "Things I've Never Said",
  "Today, You Tie the Rakhi",
  "My Promise To You",
  "A Letter From Your Brother",
  "Open This Again Years From Now",
];
