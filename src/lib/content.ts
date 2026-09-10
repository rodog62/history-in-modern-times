export const site = {
  name: "History in Modern Times",
  shortName: "HMT",
  lecturer: "Dr. Tim Crain",
  domain: "history-in-modern-times.com",
  email: "tjcrain1@gmail.com",
  tagline: "History, argued in the present.",
  kicker: "Lectures and tours with Dr. Tim Crain",
};

export const about = {
  headline: "Dr. Tim Crain",
  photoNote: "Portrait forthcoming — the same slot your dad’s site uses for a headshot.",
  paragraphs: [
    "I spent the first part of my life as an Irish Catholic boy who could not make the Holocaust fit any easy account of the world. That question — asked in a Roman Catholic grade school — became a vocation: Jewish and Christian history, modern conflict, and the stories communities tell about themselves.",
    "I earned my bachelor’s and master’s degrees at Marquette University and my doctorate at Arizona State University. I later directed the National Catholic Center for Holocaust Education at Seton Hill University, and for fifteen years ran an outreach program in Milwaukee’s Jewish community while teaching as an adjunct at Marquette and the Universities of Wisconsin at Madison and Milwaukee.",
    "I lecture on Ireland and the Irish in America, on Churchill, McCarthy, and the American Constitution, and on the long shared history of Judaism, Christianity, and Islam. The lectures are the main work. The tours are a second house.",
  ],
  quote:
    "To me, it really didn’t make any sense that something like this could happen.",
  credentials: [
    { label: "Doctorate", value: "Arizona State University" },
    { label: "B.A. & M.A.", value: "Marquette University" },
    { label: "Former director", value: "National Catholic Center for Holocaust Education, Seton Hill University" },
    { label: "Teaching", value: "Marquette · UW–Madison · UW–Milwaukee" },
  ],
};

export type Episode = {
  id: string;
  title: string;
  duration: string;
  synopsis: string;
  isFree: boolean;
  videoSrc?: string;
  posterSrc?: string;
};

export type Series = {
  id: string;
  title: string;
  subtitle: string;
  blurb: string;
  image: string;
  price: number;
  category: string;
  episodes: Episode[];
};

export type Tour = {
  id: string;
  title: string;
  place: string;
  dates: string;
  status: "recruiting" | "scheduled" | "waitlist";
  blurb: string;
  details: string[];
  image: string;
  itinerary: { day: string; title: string; note: string }[];
};

export const series: Series[] = [
  {
    id: "ireland",
    title: "Ireland: History, People, and Culture",
    subtitle: "Landscapes, memory, and the Irish in America",
    blurb:
      "An intimate survey of the Emerald Isle — how landscape, faith, famine, and revolt shaped a people, and how that story traveled to America and to Milwaukee.",
    image: "/images/series-ireland.jpg",
    price: 49,
    category: "Europe",
    episodes: [
      {
        id: "landscapes",
        title: "Landscapes, People, and the Making of Irish Identity",
        duration: "48 min",
        synopsis:
          "How Ireland’s geography, language, and long memory made a people. The sample lecture for the site — a full recording will replace the cinematic preview once Dr. Crain’s file is in hand.",
        isFree: true,
        videoSrc: "/videos/sample-lecture.mp4",
        posterSrc: "/images/sample-poster.jpg",
      },
      {
        id: "famine",
        title: "Faith, Famine, and the Long Memory",
        duration: "52 min",
        synopsis:
          "Catholic Ireland, the Famine, and the political and spiritual aftershocks that still structure Irish life on both sides of the Atlantic.",
        isFree: false,
      },
      {
        id: "revolution",
        title: "Revolution and the Birth of a Nation",
        duration: "54 min",
        synopsis:
          "From the Rising through the Civil War to the Free State — how a small island argued its way into the twentieth century.",
        isFree: false,
      },
      {
        id: "diaspora",
        title: "The Irish in America — and in Milwaukee",
        duration: "46 min",
        synopsis:
          "Immigration, parish, and machine politics. The Irish story as it settled in American cities, with particular attention to Milwaukee.",
        isFree: false,
      },
    ],
  },
  {
    id: "churchill",
    title: "Winston Churchill: Walking with Destiny",
    subtitle: "From the wilderness to the finest hour",
    blurb:
      "The life of the most consequential statesman of the twentieth century — soldier, outcast, writer, and wartime prime minister — told as a study in character under pressure.",
    image: "/images/series-churchill.jpg",
    price: 59,
    category: "Europe",
    episodes: [
      {
        id: "early-years",
        title: "A Man of Destiny: Early Years",
        duration: "50 min",
        synopsis:
          "Army, empire, and ambition. How a restless young Churchill learned the uses of language, risk, and self-myth.",
        isFree: false,
      },
      {
        id: "wilderness",
        title: "The Wilderness Years",
        duration: "55 min",
        synopsis:
          "Ridiculed and ignored through the 1920s, wrestling with what he called “that black dog,” he wrote, painted, and waited — certain he was a man of destiny. In 1933 he began to warn, and almost no one listened.",
        isFree: false,
      },
      {
        id: "storm",
        title: "The Gathering Storm",
        duration: "58 min",
        synopsis:
          "Appeasement, the House, and the long argument with Baldwin and Chamberlain as Europe slid toward war.",
        isFree: false,
      },
      {
        id: "finest-hour",
        title: "Finest Hour",
        duration: "62 min",
        synopsis:
          "1940. Language as strategy. Coalition, the RAF, and the decision that Britain would not make terms.",
        isFree: false,
      },
      {
        id: "after",
        title: "After Victory",
        duration: "48 min",
        synopsis:
          "Defeat at the polls, the Cold War, and the long last act of a man who had already lived several lives.",
        isFree: false,
      },
    ],
  },
  {
    id: "constitution",
    title: "America 250: The Constitution, Past and Present",
    subtitle: "A six-part reading of the American charter",
    blurb:
      "As the United States marks 250 years, a close look at the Constitution as a historical document, a political compromise, and a living argument — from Philadelphia to the present.",
    image: "/images/series-constitution.jpg",
    price: 69,
    category: "United States",
    episodes: [
      {
        id: "origins",
        title: "Origins and the Convention",
        duration: "50 min",
        synopsis: "Why 1787. Confederation, crisis, and the men who arrived in Philadelphia with incompatible republics in mind.",
        isFree: false,
      },
      {
        id: "compromises",
        title: "The Document and Its Compromises",
        duration: "52 min",
        synopsis: "Representation, slavery, and the architecture of separated powers. What was settled, and what was deferred.",
        isFree: false,
      },
      {
        id: "rights",
        title: "The Bill of Rights",
        duration: "48 min",
        synopsis: "Madison’s amendments, Anti-Federalist pressure, and the American habit of enumerating liberties.",
        isFree: false,
      },
      {
        id: "crisis",
        title: "Crisis and Amendment",
        duration: "54 min",
        synopsis: "Civil War, Reconstruction, and the rewriting of the Union by the Thirteenth, Fourteenth, and Fifteenth Amendments.",
        isFree: false,
      },
      {
        id: "court",
        title: "The Court and the Living Argument",
        duration: "51 min",
        synopsis: "Judicial review, incorporation, and the long contest over who gets the last word.",
        isFree: false,
      },
      {
        id: "our-time",
        title: "The Constitution in Our Time",
        duration: "49 min",
        synopsis: "America at 250: originalism, living constitutionalism, and the uses of history in public life.",
        isFree: false,
      },
    ],
  },
  {
    id: "mccarthy",
    title: "The Politics of Fear: McCarthy and the Red Scare",
    subtitle: "1950–54, and the American appetite for lists",
    blurb:
      "How a junior senator from Wisconsin, ignored by his own party, seized a nation’s anxiety and ruined hundreds of lives — and what McCarthyism still teaches about fear in a republic.",
    image: "/images/series-mccarthy.jpg",
    price: 49,
    category: "United States",
    episodes: [
      {
        id: "cold-war",
        title: "The Cold War and American Fear",
        duration: "46 min",
        synopsis: "From Yalta to the bomb. Why so many Americans were ready to believe in hidden enemies.",
        isFree: false,
      },
      {
        id: "loyalty",
        title: "Loyalty, Lists, and HUAC",
        duration: "48 min",
        synopsis: "The machinery of suspicion before McCarthy: loyalty boards, the Attorney General’s list, the House committee.",
        isFree: false,
      },
      {
        id: "hollywood",
        title: "Hollywood and the Blacklist",
        duration: "50 min",
        synopsis: "The entertainment industry as a stage for national purification — and the cost of naming names.",
        isFree: false,
      },
      {
        id: "junior-senator",
        title: "The Junior Senator, 1947–50",
        duration: "44 min",
        synopsis:
          "McCarthy tried and failed to matter. Democrats ignored him; Republicans disliked him. Then the Cold War handed him a script.",
        isFree: false,
      },
      {
        id: "wheeling",
        title: "Senator McCarthy",
        duration: "56 min",
        synopsis:
          "On February 9, 1950, he claimed 205 known communists in the State Department. He did not have the name of even one. McCarthyism was born anyway.",
        isFree: false,
      },
    ],
  },
  {
    id: "sister-religions",
    title: "The Three Sister Religions",
    subtitle: "From the Crusades to the modern day",
    blurb:
      "Judaism, Christianity, and Islam as a shared and contested inheritance — Moses, Jesus, and Muhammad in history, and the long aftermath of the Crusades.",
    image: "/images/series-religions.jpg",
    price: 55,
    category: "Faith & conflict",
    episodes: [
      {
        id: "moses",
        title: "Moses and the Shared Inheritance",
        duration: "50 min",
        synopsis:
          "The figure of Moses as lawgiver — and why Judaism, Christianity, and Islam cannot be told as three sealed boxes.",
        isFree: false,
      },
      {
        id: "jesus",
        title: "Jesus of Nazareth and the Jewish World",
        duration: "52 min",
        synopsis:
          "A Jewish life, a Jewish death, and the making of a church that would both remember and forget that origin.",
        isFree: false,
      },
      {
        id: "muhammad",
        title: "Muhammad and the Quranic Memory of the Prophets",
        duration: "51 min",
        synopsis: "How Moses and Jesus appear in the Quran, and what that does to any simple story of civilizational clash.",
        isFree: false,
      },
      {
        id: "crusades",
        title: "The Crusades",
        duration: "58 min",
        synopsis: "Holy war, pilgrimage, and massacre — and the medieval encounter that still furnishes modern slogans.",
        isFree: false,
      },
      {
        id: "modern",
        title: "Living Together, Living Apart",
        duration: "49 min",
        synopsis: "From emancipation to the Holocaust to the contemporary Middle East: the sister religions in the modern day.",
        isFree: false,
      },
    ],
  },
];

export const tours: Tour[] = [
  {
    id: "ireland-tour",
    title: "Ireland: Landscapes of Memory",
    place: "Dublin · the West · Belfast",
    dates: "Dates to be announced",
    status: "recruiting",
    blurb:
      "A small-group tour led by Dr. Crain, built around the same questions as the lecture series: landscape, faith, revolt, and the making of modern Ireland. Recruiting now.",
    image: "/images/tour-ireland.jpg",
    details: [
      "Historian-led, not a motor-coach survey.",
      "Reading list issued six weeks before departure.",
      "Evenings of conversation; days on the ground.",
      "Limited to a small cohort so the rooms stay rooms.",
    ],
    itinerary: [
      { day: "Days 1–3", title: "Dublin", note: "The capital as palimpsest: castle, GPO, Kilmainham, and the Georgian rooms where a nation was argued into being." },
      { day: "Days 4–7", title: "The West", note: "Stone, Atlantic, language. Abbey ruins, famine landscape, and the long continuity of rural Ireland." },
      { day: "Days 8–10", title: "Ulster", note: "Belfast and the border as living history — not a closed chapter." },
    ],
  },
  {
    id: "milwaukee-irish",
    title: "Milwaukee: The Irish in the Cream City",
    place: "Milwaukee, Wisconsin",
    dates: "Offered seasonally",
    status: "waitlist",
    blurb:
      "A walking day on the Irish of Milwaukee — parish, politics, and the immigrant city — for those who want the diaspora lecture on the streets where it happened.",
    image: "/images/tour-milwaukee.jpg",
    details: [
      "A single full day, on foot and by short hops.",
      "Built for local groups, clubs, and visiting families.",
      "Can be booked privately for a cohort.",
    ],
    itinerary: [
      { day: "Morning", title: "The river and the parishes", note: "Where the Irish landed, worshipped, and voted." },
      { day: "Afternoon", title: "Neighborhood and memory", note: "The institutions that remain, and the ones that only remain in story." },
    ],
  },
];

export const sampleSeries = series[0]!;
export const sampleLecture = sampleSeries.episodes[0]!;

export function getSeries(id: string) {
  return series.find((s) => s.id === id);
}

export function getEpisode(seriesId: string, episodeId: string) {
  const s = getSeries(seriesId);
  if (!s) return undefined;
  const episode = s.episodes.find((e) => e.id === episodeId);
  if (!episode) return undefined;
  return { series: s, episode };
}

export function getTour(id: string) {
  return tours.find((t) => t.id === id);
}

export function seriesPriceLabel(price: number) {
  return `$${price}`;
}
