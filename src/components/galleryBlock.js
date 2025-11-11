import '../scss/gallery.scss';
import { truncateByWords } from '../util/helper.js';

const galleryBlockProps = {
	images: [],
	title: '',
	description: '',
	instruction: {
		title: '',
		description: ''
	}
}

export function galleryBlock( { images, title, description, instruction } = galleryBlockProps) {
	const container = document.createElement('div');
	container.className = 'gallery-container';

	// Left column - images
	const leftColumn = document.createElement('div');
	leftColumn.className = 'gallery-column left-column';

	images.forEach(image => {
		const img = document.createElement('img');
		img.src = image.src;
		img.alt = image.alt || title;
		leftColumn.appendChild(img);
	});

	// Right column - text
	const rightColumn = document.createElement('div');
	rightColumn.className = 'gallery-column right-column';

	const headerTitle = document.createElement('h2');
	headerTitle.textContent = title;

	const hr = document.createElement('hr');

	const blockDescription = document.createElement('p');
	blockDescription.classList.add('block-description');
	blockDescription.textContent = truncateByWords(description, 75);

	const insTitle = document.createElement('h5');
	insTitle.textContent = instruction.title;

	const insDescription = document.createElement('p');
	insDescription.classList.add('ins-description');
	insDescription.textContent = instruction.description;

	rightColumn.appendChild(headerTitle);
	rightColumn.appendChild(hr);
	rightColumn.appendChild(blockDescription);
	rightColumn.appendChild(insTitle);
	rightColumn.appendChild(insDescription);

	// Combine columns
	container.appendChild(leftColumn);
	container.appendChild(rightColumn);

	return container;
}
