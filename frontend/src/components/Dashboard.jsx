import React, { useState } from 'react';
import Loader from './Loader';

const Dashboard = () => {
  const [topic, setTopic] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <main className="p-6 md:p-10 max-w-screen-xl mx-auto">
      <form
        onSubmit={fetchArticles}
        className="flex flex-col sm:flex-row gap-4 mb-10"
      >
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic (e.g. Apple, Elon Musk, Nike...)"
          className="flex-1 px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow"
        >
          Analyze
        </button>
      </form>

      {loading && <Loader />}

      {!loading && articles.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-400">No articles yet. Start by entering a topic.</p>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              <strong>Source:</strong> {article.source}
            </p>
            <p className="mb-2">
              <strong>Sentiment:</strong>{' '}
              <span
                className={
                  article.sentiment === 'Positive'
                    ? 'text-green-600'
                    : article.sentiment === 'Negative'
                    ? 'text-red-600'
                    : 'text-yellow-500'
                }
              >
                {article.sentiment}
              </span>
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-300">{article.summary}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
