import image1Url from '../assets/images/gallery1-min.webp';
import image2Url from '../assets/images/gallery2-min.webp';
import image3Url from '../assets/images/gallery3-min.webp';

export const galleryData = [
	{
		images: [
			{
				src: image1Url,
				alt: 'Image 1'
			},
			{
				src: image2Url,
				alt: 'Image 2'
			},	
			{
				src: image3Url,
				alt: 'Image 3'
			}
		],
		title: 'What does cooking mean?',
		description: 'Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Herve This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him and find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat condimentum ex, in accumsan sapien rhoncus a. Vivamus dapibus diam magna, iaculis scelerisque felis tristique et. Etiam nec egestas est. Donec porttitor, eros id feugiat posuere, lacus purus tincidunt ligula, scelerisque vestibulum orci risus porttitor lorem. Sed sodales, metus vitae ultricies pretium, augue nunc ornare turpis, lobortis tempus erat arcu id ipsum.',
		instruction: {
			title: 'The perfect egg',
			description: 'Keep water between 67 and 68C for flavourful, tender yolk'
		}
	}
];