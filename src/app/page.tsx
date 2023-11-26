import Image from "next/image";
import mockResponse from "./components/mockResponse.json";
import { NewsItem } from "./components/NewsItem";

const getchNews = async () => {
  return mockResponse;
};

const HomePage = async () => {
  return (
    <div>
      <ul role="list">
        {mockResponse.articles.map((item: any) => (
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
