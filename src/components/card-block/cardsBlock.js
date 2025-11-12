import '../../scss/cards.scss';
import { truncateByWords } from '../../util/helper.js';

export function cardsBlock({ title = 'TASTE THE COLOURS', cards = [] } = {}) {
	if (!cards.length || !title) return null;

	const container = document.createElement('div');
	container.className = 'cards-container';

	const headerTitle = document.createElement('h2');
	headerTitle.textContent = title;
	container.appendChild(headerTitle);

	const cardsWrapper = document.createElement('div');
	cardsWrapper.className = 'cards-wrapper';
	container.appendChild(cardsWrapper);

	cards.forEach(card => {
		const cardEl = document.createElement('div');
		cardEl.className = 'card';
		cardEl.setAttribute('role', 'button');       
		cardEl.setAttribute('tabindex', '0');        
		cardEl.setAttribute('aria-label', `${card.title}: ${card.description}`); 

		const img = document.createElement('img');
		img.src = card.src;
		img.alt = card.title || '';
		cardEl.appendChild(img);

		const cardTitle = document.createElement('h3');
		cardTitle.textContent = card.title || '';
		cardEl.appendChild(cardTitle);

		const cardDesc = document.createElement('p');
		cardDesc.textContent = window.innerWidth <= 480 ? card.description : truncateByWords(card.description, 40);
		cardEl.appendChild(cardDesc);

		cardsWrapper.appendChild(cardEl);

		const logCard = () => {
			console.log({
				src: card.src,
				title: card.title,
				description: card.description
			});
		};

		cardEl.addEventListener('click', logCard);
		cardEl.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				logCard();
			}
		});
	});

	return container;
};
