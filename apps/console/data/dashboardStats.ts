export const weeklyTrendIndicators = {
  date: '2025-05-30', // Use string to simplify JSON transport and parsing

  total_users: {
    to_date: 5812,
    pct_change: 1,
    pct_change_symbol: '+',
    pct_change_display: '+1%',
    display_text: 'Up 1% this week',
    subtitle_display_text: 'Slight increase in total users',
  },

  active_users: {
    to_date: 2123,
    pct_change: -4.5,
    pct_change_symbol: '-',
    pct_change_display: '-4.5%',
    display_text: 'Down -4.5% this week',
    subtitle_display_text: 'Slight decrease in active users',
  },

  prompts: {
    previous_week: 1229790,
    to_date: 2420598,
    pct_change_symbol: '+',
    pct_change_display: "+153.7%",
    display_text: 'Up 153.7% this week',
    subtitle_display_text: 'Major increase in people using daily',
  },
  token_costs: {
    previous_week: 100000,
    to_date: 19571.0,
    pct_change_symbol: '+',
    pct_change_display: '+51%',
    display_text: 'Up 51% this week',
    subtitle_display_text: 'Major increase in people using daily',
  },
};

export const trendingTopics = {
  start_date: '2025-05-23T00:00:00',
  end_date: "2025-05-30T00:00:00",
  topic_counts: {
    technology: 9445,
    business: 7786,
    government: 3770,
    software_development: 1871,
    programming: 1309,
    communication: 1109,
    procurement: 1098,
    general: 974,
    web_development: 889,
    human_resources: 721,
    education: 689,
    professional_development: 605,
    construction: 517
  },
}

export const modelComparison = [
  {
    name: "Haiku 3.5",
    scores: {
      Business: 65,
      Coding: 74,
      "Reading Comprehension": 90,
      Safeguards: 94,
      FAR: 60,
    },
  },
  {
    name: "Sonnet 3.5",
    scores: {
      Business: 85,
      Coding: 78,
      "Reading Comprehension": 90,
      Safeguards: 95,
      FAR: 80,
    },
  },
  {
    name: "LLama 3.2 (11B)",
    scores: {
      Business: 82,
      Coding: 72,
      "Reading Comprehension": 89,
      Safeguards: 95,
      FAR: 20,
    },
  },
];