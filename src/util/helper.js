export const truncateByWords = (text, maxWords) => {
	if (!text) return '';
	const words = text.trim().split(/\s+/);
	if (words.length <= maxWords) return text;
	return words.slice(0, maxWords).join(' ') + '…';
}