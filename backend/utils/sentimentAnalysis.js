// utils/sentimentAnalysis.js
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

exports.analyze = (text) => {
  const result = sentiment.analyze(text);
  if (result.score > 0) return 'Positive';
  if (result.score < 0) return 'Negative';
  return 'Neutral';
};
