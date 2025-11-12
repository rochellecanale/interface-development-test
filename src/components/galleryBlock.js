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
};

function createModal(src, alt) {
	const modalOverlay = document.createElement('div');
	modalOverlay.className = 'image-modal-overlay';
	modalOverlay.setAttribute('role', 'dialog');
	modalOverlay.setAttribute('aria-modal', 'true');
	modalOverlay.setAttribute('tabindex', '-1');

	const modalContent = document.createElement('div');
	modalContent.className = 'image-modal-content';

	const modalImage = document.createElement('img');
	modalImage.src = src;
	modalImage.alt = alt;
	modalImage.className = 'modal-image';

	modalContent.appendChild(modalImage);
	modalOverlay.appendChild(modalContent);

	const closeModal = () => {
		modalOverlay.classList.remove('open');
		setTimeout(() => {
			modalOverlay.remove();
		}, 300);
	};

	// Click outside to close
	modalOverlay.addEventListener('click', (event) => {
		if (event.target === modalOverlay) {
			closeModal();
		}
	});

	// Keyboard accessibility
	modalOverlay.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			closeModal();
		}
	});

	// Set focus when modal opens
	requestAnimationFrame(() => {
		modalOverlay.focus();
	});

	return modalOverlay;
}

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
		img.setAttribute('tabindex', '0'); // keyboard focusable
		img.setAttribute('role', 'button'); // inform screen readers

		img.addEventListener('click', () => {
			const modal = createModal(img.src, img.alt);
			document.body.appendChild(modal);
			requestAnimationFrame(() => modal.classList.add('open'));
		});

		// Keyboard support for opening modal
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
}
