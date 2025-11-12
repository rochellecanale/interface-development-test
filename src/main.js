import './scss/index.scss';

import { galleryData } from './data/gallery';
import { cardsData } from './data/cards';

import { gallerySkeleton, cardsSkeleton } from './components/skeleton.js'
import { galleryBlock } from './components/gallery/galleryBlock.js';
import { cardsBlock } from './components/card-block/cardsBlock.js';

const app = document.getElementById('app');

galleryData.forEach((data, index) => {
	const skeleton = gallerySkeleton();
	app.appendChild(skeleton);
	setTimeout(() => {
		const block = galleryBlock(data);
		if (block) app.replaceChild(block, skeleton);
		else skeleton.remove();
	}, 1500 + index * 500);
});

cardsData.forEach((data, index) => {
	const skeleton = cardsSkeleton();
	app.appendChild(skeleton);
	setTimeout(() => {
		const block = cardsBlock(data);
		if (block) app.replaceChild(block, skeleton);
		else skeleton.remove();
	}, 1500 + index * 500);
});

