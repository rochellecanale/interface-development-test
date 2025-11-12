export function createModal(images, currentIndex = 0) {
	const modalOverlay = document.createElement('div');
	modalOverlay.className = 'image-modal-overlay';
	modalOverlay.setAttribute('role', 'dialog');
	modalOverlay.setAttribute('aria-modal', 'true');
	modalOverlay.setAttribute('tabindex', '-1');

	const modalContent = document.createElement('div');
	modalContent.className = 'image-modal-content';

	const modalImage = document.createElement('img');
	modalImage.src = images[currentIndex].src;
	modalImage.alt = images[currentIndex].alt || '';
	modalImage.className = 'modal-image';

	modalContent.appendChild(modalImage);
	modalOverlay.appendChild(modalContent);

	const updateImage = (index) => {
		currentIndex = (index + images.length) % images.length; 
		modalImage.src = images[currentIndex].src;
		modalImage.alt = images[currentIndex].alt || '';
	};

	const closeModal = () => {
		modalOverlay.classList.remove('open');
		setTimeout(() => modalOverlay.remove(), 300);
	};

	modalOverlay.addEventListener('click', (event) => {
		if (event.target === modalOverlay) closeModal();
	});

	let startX = 0;
	let endX = 0;

	modalOverlay.addEventListener('keydown', (event) => {
		switch (event.key) {
			case 'Escape':
				closeModal();
				break;
			case 'ArrowRight':
				updateImage(currentIndex + 1);
				break;
			case 'ArrowLeft':
				updateImage(currentIndex - 1);
				break;
		}
	});

	modalOverlay.addEventListener('touchstart', (event) => {
		startX = event.touches[0].clientX;
	});

	modalOverlay.addEventListener('touchend', (event) => {
		endX = event.changedTouches[0].clientX;
		const diff = endX - startX;
		if (Math.abs(diff) > 50) { // swipe threshold
			if (diff < 0) updateImage(currentIndex + 1); // swipe left → next
			else updateImage(currentIndex - 1);          // swipe right → previous
		}
	});

	requestAnimationFrame(() => modalOverlay.focus());

	return modalOverlay;
}