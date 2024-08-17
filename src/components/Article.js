import React from 'react';
import '../styles/Article.css';

const Article = (props) => {
	return (
		<div>
			<article>
				<h3 className='article__title'>{props.title}</h3>
				<p className='article__author'>Author: {props.author}</p>
				<p className='article__description'>{props.description}</p>
				<p className='article__link'>
					<a href={props.url} target='_blank' rel='noopener noreferrer'>
						Read more
					</a>
				</p>
			</article>
		</div>
	);
};

export default Article;
