const { fetchNews } = require('../services/newsApiService');
const { generateSummary } = require('../services/huggingfaceService');
const { analyze } = require('../utils/sentimentAnalysis'); // <== use real sentiment analysis

exports.analyzeTopic = async (req, res) => {
  const { topic } = req.body;

  if (!topic || topic.trim() === '') {
    return res.status(400).json({ error: 'Topic is required' });
  }

  try {
    const articles = await fetchNews(topic);

    const analyzedArticles = await Promise.all(
      articles.map(async (article) => {
        const text = article.description || article.content || article.title;
        const summary = await generateSummary(text);
        const sentiment = analyze(article.title + ' ' + (article.description || ''));

        return {
          title: article.title,
          sentiment,
          summary,
          source: article.source.name,
        };
      })
    );

    res.json({ articles: analyzedArticles });
  } catch (error) {
    console.error('Error in analyzeTopic:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
