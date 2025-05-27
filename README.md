
# 📰 MediaPulse Dashboard

## NOTE : IT HARDLY TAKES 1-2 MINUTES TO EXTRACT THE NEWS WORLDWIDE : )
 
A beautiful, fully responsive AI-powered news analysis dashboard that allows users to:
- Enter any **topic or keyword** (e.g. Apple, SpaceTech, Finance Trends)
- Fetch **recent news headlines**
- Perform **sentiment analysis**
- View short **summaries** of the articles
- Understand article **sources**
- Toggle between **light/dark themes**
- Enjoy animated transitions and modern UI experience

> 🔥 Built with Vite + React.js + Tailwind CSS + Node.js + HuggingFace Transformers


## 🌟 Features

✅ Enter any topic  
✅ Fetch and display news headlines  
✅ Article **summarization** using Hugging Face (`distilbart-cnn-6-6`)  
✅ Sentiment analysis (Positive / Neutral / Negative)  
✅ Dark mode toggle 🌗  
✅ Loader spinner animations 🌀  
✅ Fully responsive layout for mobile, tablet, and desktop  
✅ Clean and elegant UI  


## 🧠 AI Features

### 📝 Article Summarization
- Powered by HuggingFace's `distilbart-cnn-6-6` model (via `transformers` + `node.js`)
- Reduces article content to a **2-line summary**

### 😄 Sentiment Analysis
- Uses a custom word-based approach for basic classification
- Tags article as `Positive`, `Negative`, or `Neutral`


## 🧱 Tech Stack Used : 

| Layer       | Technology                       |
|------------|----------------------------------|
| Frontend   | React.js (Vite) + Tailwind CSS   |
| Animations | Tailwind plugins + Framer Motion |
| Backend    | Node.js + Express.js             |
| AI Model   | HuggingFace Transformers         |
| Hosting    | Replit / Render (for deployment) |

---

# 💻 Local Setup

# 🚀 Setup Instructions

# 1. Clone the Repository


git clone https://github.com/Ankit-78/Media-Pulse-Dashboard---madchatter.git

To run the Frontend Part : 

cd frontend 

Run the command : npm run dev 


To run the Backend Part : 

cd backend

Create the .env file 

Complete Structure of .env file 

# Go to the newsapi.org to get the api key 

NEWS_API_KEY= YOUR_API_KEY
PORT=5000 

Run the command : npm start 

# Deployment Platforms Used for Hosting

For Frontend :  Vercel   (The Link is in the About section (top right corner)

For Backend  : Render 









