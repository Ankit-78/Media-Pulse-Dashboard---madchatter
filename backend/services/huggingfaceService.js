const { pipeline } = require('@xenova/transformers');

let summarizer;

async function initSummarizer() {
  try {
    summarizer = await pipeline('summarization');
    console.log('Summarizer model loaded');
  } catch (error) {
    console.error('Failed to load summarizer model:', error);
  }
}

initSummarizer();

exports.generateSummary = async (text) => {
  if (!summarizer) {
    return 'Summarizer model is still loading, please try again later.';
  }
  try {
    const output = await summarizer(text, { max_length: 60, min_length: 20 });
    return output[0].summary_text;
  } catch (error) {
    console.error('Error during summarization:', error);
    return 'Summary not available.';
  }
};
