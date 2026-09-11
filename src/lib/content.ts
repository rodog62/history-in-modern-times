export const site = {
  name: "History in Modern Times",
  shortName: "HMT",
  lecturer: "Dr. Tim Crain",
  domain: "history-in-modern-times.com",
  email: "tjcrain1@gmail.com",
  tagline: "Making history accessible and meaningful.",
  kicker: "Historian, educator, and public speaker",
};

export const about = {
  headline: "Dr. Tim Crain",
  photo: "/images/portrait.jpg",
  photoAlt: "Dr. Tim Crain, historian and public speaker",
  paragraphs: [
    "Tim Crain, Ph.D. is a historian, educator, and nationally recognized public speaker whose scholarship and teaching have focused on modern European, modern American, and Middle Eastern history. A graduate of Marquette University, Dr. Crain earned his Ph.D. from Arizona State University, specializing in modern European and American history.",
    "Dr. Crain spent fifteen years teaching at Marquette University and the University of Wisconsin–Madison. He later joined Seton Hill University, where he served as a professor and director of the National Catholic Center for Holocaust Education. Throughout his academic career, he has been committed to making history accessible and meaningful to college students, community organizations, as well as general audiences.",
    "An accomplished public speaker, Dr. Crain has delivered hundreds of lectures and lecture series nationwide on subjects ranging from modern European and American history to World War II, the Cold War, the Middle East, international conflict, as well as many biographical series.",
  ],
  honors: [
    {
      label: "Alumni Award for Leadership Excellence",
      value: "Marquette University",
    },
    {
      label: "Outstanding Service Award",
      value: "Marquette University",
    },
    {
      label: "Outstanding Teaching Award",
      value: "University of Wisconsin System",
    },
  ],
  credentials: [
    { label: "Doctorate", value: "Arizona State University" },
    { label: "Graduate", value: "Marquette University" },
    {
      label: "Former director",
      value:
        "National Catholic Center for Holocaust Education, Seton Hill University",
    },
    {
      label: "Teaching",
      value: "Marquette University · University of Wisconsin–Madison",
    },
  ],
};

export type Series = {
  id: string;
  title: string;
  blurb: string;
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

/** Live lecture subjects from Tim’s bio. Recordings come later. */
export const series: Series[] = [
  {
    id: "europe",
    title: "Modern European History",
    blurb:
      "The histories that still structure Europe — nations, faith, war, and memory — delivered as a lecture or as a series for clubs, parishes, and civic groups.",
  },
  {
    id: "america",
    title: "Modern American History",
    blurb:
      "The American story as it is still argued: the Constitution, McCarthy, and the long twentieth century, for audiences who want history they can use.",
  },
  {
    id: "ww2",
    title: "World War II",
    blurb:
      "The war that remade the world, taught as history rather than nostalgia — from the European theater to the questions it left unanswered.",
  },
  {
    id: "cold-war",
    title: "The Cold War",
    blurb:
      "Fear, ideology, and the American appetite for lists. How a bipolar world was lived, and what it still teaches about power.",
  },
  {
    id: "middle-east",
    title: "The Middle East and International Conflict",
    blurb:
      "The sister religions, modern conflict, and the stories communities tell about themselves — from the Crusades to the present.",
  },
  {
    id: "biography",
    title: "Biographical Series",
    blurb:
      "Lives that still instruct the present. Churchill, Ireland, and other series Dr. Crain has delivered hundreds of times to audiences nationwide.",
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
      "A small-group tour led by Dr. Crain: landscape, faith, revolt, and the making of modern Ireland. Recruiting as dates firm up.",
    image: "/images/tour-ireland.jpg",
    details: [
      "Historian-led, not a motor-coach survey.",
      "Reading list issued six weeks before departure.",
      "Evenings of conversation; days on the ground.",
      "Limited to a small cohort so the rooms stay rooms.",
    ],
    itinerary: [
      {
        day: "Days 1–3",
        title: "Dublin",
        note: "The capital as palimpsest: castle, GPO, Kilmainham, and the Georgian rooms where a nation was argued into being.",
      },
      {
        day: "Days 4–7",
        title: "The West",
        note: "Stone, Atlantic, language. Abbey ruins, famine landscape, and the long continuity of rural Ireland.",
      },
      {
        day: "Days 8–10",
        title: "Ulster",
        note: "Belfast and the border as living history — not a closed chapter.",
      },
    ],
  },
  {
    id: "milwaukee-irish",
    title: "Milwaukee: The Irish in the Cream City",
    place: "Milwaukee, Wisconsin",
    dates: "Offered seasonally",
    status: "waitlist",
    blurb:
      "A walking day on the Irish of Milwaukee — parish, politics, and the immigrant city — for local groups, clubs, and visiting families.",
    image: "/images/tour-milwaukee.jpg",
    details: [
      "A single full day, on foot and by short hops.",
      "Built for local groups, clubs, and visiting families.",
      "Can be booked privately for a cohort.",
    ],
    itinerary: [
      {
        day: "Morning",
        title: "The river and the parishes",
        note: "Where the Irish landed, worshipped, and voted.",
      },
      {
        day: "Afternoon",
        title: "Neighborhood and memory",
        note: "The institutions that remain, and the ones that only remain in story.",
      },
    ],
  },
];

export function getSeries(id: string) {
  return series.find((s) => s.id === id);
}

export function getTour(id: string) {
  return tours.find((t) => t.id === id);
}
