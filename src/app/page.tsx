import Image from "next/image";
import mockResponse from "./components/mockResponse.json";
import { NewsItem } from "./components/NewsItem";

const API_KEY = process.env.API_KEY;
const apiUpdateRate = 60 * 60 * 24; // 24 hours
const newsApi = `https://gnews.io/api/v4/top-headlines?category=health&lang=en&apikey=${API_KEY}`;

// Mock API CALL
const fetchNews = async () => {
  return mockResponse;
};

//Api Call
// const fetchNews = async () => {
//   const response = await fetch(`${newsApi}`, {
//     next: {
//       revalidate: apiUpdateRate,
//     },
//   });
//   const healthNews = await response.json();
//   healthNews.articles.forEach((article: any) => {
//     console.log("Source Name:", article.source.name);
//     console.log("Source URL:", article.source.url);
//     // Log other properties as needed
//     console.log("\n"); // Add a new line for better readability
//   });
//   console.log(healthNews);
//   return healthNews;
// };

const HomePage = async () => {
  const trendingNews = await fetchNews();
  return (
    <div>
      <ul role="list">
        {trendingNews.articles.map((item: any) => (
          <NewsItem
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
