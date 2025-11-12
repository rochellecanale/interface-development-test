export const createSkeleton = ({ layout = [] } = {}) => {
	const container = document.createElement('div');
	container.className = 'skeleton-container';

	layout.forEach(section => {
		const sectionEl = document.createElement('div');
		sectionEl.className = `skeleton-section ${section.className || ''}`;

		(section.shapes || []).forEach(shape => {
			const el = document.createElement('div');
			el.className = `skeleton ${shape.type || 'rect'}`;
			if (shape.width) el.style.width = shape.width;
			if (shape.height) el.style.height = shape.height;
			if (shape.borderRadius) el.style.borderRadius = shape.borderRadius;
			if (shape.className) el.classList.add(shape.className);
			sectionEl.appendChild(el);
		});

		container.appendChild(sectionEl);
	});

	return container;
};

export function gallerySkeleton () {
	return createSkeleton({
		layout: [
			{
				className: 'gallery-left',
				shapes: [
					{ type: 'rect', width: '100%', height: '400px', borderRadius: '8px' }
				]
			},
			{
				className: 'gallery-right',
				shapes: [
					{ type: 'rect', width: '100%', height: '30px', borderRadius: '4px' }, 
					{ type: 'rect', width: '100%', height: '100px', borderRadius: '4px' }, 
					{ type: 'rect', width: '100%', height: '30px', borderRadius: '4px' },  
					{ type: 'rect', width: '100%', height: '30px', borderRadius: '4px' },  
					{ type: 'rect', width: '100%', height: '30px', borderRadius: '4px' },  
				]
			}
		]
	});
};

export function cardsSkeleton() {
	return createSkeleton({
		layout: [
			{
				className: 'cards-thumbs',
				shapes: Array.from({ length: 3 }).map(() => ({
					type: 'rect',  
				})),
			},
		],
	});
}
