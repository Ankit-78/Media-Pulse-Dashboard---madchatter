const axios = require('axios');

const NEWS_API_KEY = process.env.NEWS_API_KEY;

exports.fetchNews = async (topic) => {
  try {
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(topic)}&pageSize=5&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

    const response = await axios.get(url);

    if (response.data.status === 'ok') {
      return response.data.articles;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
    return [];
  }
};
