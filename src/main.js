import './scss/index.scss';
import { galleryData } from './data/gallery';
import { gallerySkeleton } from './components/skeleton.js'
import { galleryBlock } from './components/gallery/galleryBlock.js';

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