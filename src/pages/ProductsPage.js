import React, { useState, useEffect } from 'react';
import Article from '../components/Article';

const ProductsPage = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		let dateYearMonth = new Date().toISOString().slice(0, 8);
		let day = new Date().toISOString().slice(8, 10) - 1;

		let date = dateYearMonth + day;

		const API = `https://newsapi.org/v2/everything?q=Apple&from=2024-08-${date}&sortBy=popularity&apiKey=0cc5d7fa90c449ca92e0180fe9c83a88`;

		fetch(API)
			.then((response) => response.json())
			.then((data) => {
				const limitArticles = data.articles.slice(0, 5);
				setArticles(limitArticles);
			})
			.catch((error) => console.error('Błąd przy pobieraniu danych', error));
	}, []);

	const articleList = articles.map((article, index) => (
		<Article
			key={index}
			title={article.title}
			author={article.author}
			description={article.description}
			url={article.url}
		/>
	));

	return (
		<div>
			<h1>Produkty</h1>
			{articles.length > 0 ? (
				<div>{articleList}</div>
			) : (
				<p>Ładowanie danych...</p>
			)}
		</div>
	);
};

export default ProductsPage;
