export interface Article {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  url: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Mental Health as a Trivariate Function",
    category: "Psychology",
    thumbnail: "/articles/mental-health.jpg",
    url: "https://medium.com/@bradyransom/mental-health-as-a-trivariate-function-bc5fd9eadf96"
  },
  {
    id: "2",
    title: "Correlations between OCD & suicidal behavior",
    category: "Mental Health",
    thumbnail: "/articles/ocd-study.jpg",
    url: "https://medium.com/@bradyransom/correlations-between-ocd-suicidal-behavior-51d140787260"
  },
  {
    id: "3",
    title: "20 years of an undiagnosed anxiety disorder: what I've learned",
    category: "Personal Experience",
    thumbnail: "/articles/anxiety.jpg",
    url: "https://medium.com/@bradyransom/20-years-of-an-undiagnosed-anxiety-disorder-what-ive-learned-7ff2a9208dfd"
  },
  {
    id: "4",
    title: "An analysis of how the brain is affected by drugs",
    category: "Neuroscience",
    thumbnail: "/articles/brain.jpg",
    url: "https://medium.com/@bradyransom/an-analysis-of-how-the-brain-is-affected-by-drugs-53371178148b"
  },
  {
    id: "5",
    title: "How do the new Covid-19 vaccines work?",
    category: "Medicine",
    thumbnail: "/articles/vaccine.jpg",
    url: "https://theoutspoken.org/2021/07/28/how-do-the-new-covid-19-vaccines-work/"
  },
  {
    id: "6",
    title: "How the Remarkable Strides of Solar Energy Reflect Technological Advancement",
    category: "Technology",
    thumbnail: "/articles/solar.jpg",
    url: "https://theoutspoken.org/2021/06/15/how-the-remarkable-strides-of-solar-energy-reflect-technological-advancement/"
  },
  {
    id: "7",
    title: "How Dangerous Really is Nuclear Energy?",
    category: "Energy",
    thumbnail: "/articles/nuclear.jpg",
    url: "https://theoutspoken.org/2021/05/13/how-dangerous-really-is-nuclear-energy/"
  },
  {
    id: "8",
    title: "NASA's Jet Propulsion Laboratory Successful Perseverance Mars Rover Provides Greater Advancement",
    category: "Space",
    thumbnail: "/articles/nasa.jpg",
    url: "https://theoutspoken.org/2021/02/19/nasas-jet-propulsion-laboratory-successful-perseverance-mars-rover-provides-greater-advancement/"
  },
  {
    id: "9",
    title: "What Is Quantum Computing And How Will We Use It?",
    category: "Computing",
    thumbnail: "/articles/quantum.jpg",
    url: "https://theoutspoken.org/2021/02/12/what-is-quantum-computing-and-how-will-we-use-it/"
  }
];


