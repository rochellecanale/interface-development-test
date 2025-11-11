import './scss/index.scss';
import { galleryData } from './data/gallery';
import { galleryBlock } from './components/galleryBlock.js';

const app = document.getElementById('app');
galleryData.forEach(data => {
	const block = galleryBlock(data);
	app.appendChild(block);
});