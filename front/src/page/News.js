import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsComponent.css'; // Ensure you have appropriate CSS

function News() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
                params: { query: '원하는 검색어' },
                headers: {
                    'X-Naver-Client-Id': 'your-client-id',
                    'X-Naver-Client-Secret': 'your-client-secret'
                }
            });
            setArticles(response.data.items);
        };

        fetchData();
    }, []);

    return (
        <div id="contents" className="newsct_body">
            {articles.map(article => (
                <div key={article.link} id="newsct_article" className="newsct_article _article_body">
                    <article id="dic_area" className="go_trans _article_content">
                        <strong className="media_end_summary">
                            {article.title.replace(/<[^>]+>/g, '')}
                        </strong>
                        <span className="end_photo_org">
                            <img src={article.image} alt="News Thumbnail" />
                        </span>
                        <p>{article.description.replace(/<[^>]+>/g, '')}</p>
                        <div className="byline">
                            <p>{article.byline}</p>
                        </div>
                    </article>
                </div>
            ))}
        </div>
    );
}

export default News;
