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
    previous_week: 100000,
    to_date: 12990000,
    pct_change_symbol: '+',
    pct_change_display: '+39%',
    display_text: 'Up 39% this week',
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