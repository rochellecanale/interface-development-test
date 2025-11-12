import '../../scss/gallery.scss';
import { truncateByWords } from '../../util/helper.js';
import { galleryBlockProps } from '../../props/gallery.js';
import { createModal } from './galleyModal.js';

export function galleryBlock({ images, title, description, instruction } = galleryBlockProps) {
	if (!images.length || !title || !description || !instruction) return null;

	const container = document.createElement('div');
	container.className = 'gallery-container';

	// Left column - images
	const leftColumn = document.createElement('div');
	leftColumn.className = 'gallery-column left-column';

	images.forEach(image => {
		const imageWrapper = document.createElement('div');
		imageWrapper.className = 'gallery-image-wrapper';

		const img = document.createElement('img');
		img.src = image.src;
		img.alt = image.alt || title;
		img.className = 'lazyload';
		img.setAttribute('tabindex', '0');
		img.setAttribute('role', 'button');

		img.addEventListener('click', () => {
			const modal = createModal(images, images.indexOf(image));
			document.body.appendChild(modal);
			requestAnimationFrame(() => modal.classList.add('open'));
		});

		img.addEventListener('keydown', (event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				const modal = createModal(img.src, img.alt);
				document.body.appendChild(modal);
				requestAnimationFrame(() => modal.classList.add('open'));
			}
		});

		imageWrapper.appendChild(img);
		leftColumn.appendChild(imageWrapper);
	});

	// Right column - text
	const rightColumn = document.createElement('div');
	rightColumn.className = 'gallery-column right-column';

	const headerTitle = document.createElement('h2');
	headerTitle.textContent = title;

	const hr = document.createElement('hr');

	const blockDescription = document.createElement('p');
	blockDescription.classList.add('block-description');
	blockDescription.textContent = window.innerWidth <= 480 ? description : truncateByWords(description, 75);

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
};
