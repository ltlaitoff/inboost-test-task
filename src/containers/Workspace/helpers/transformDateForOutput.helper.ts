export function transformDateForOutput(date: Date) {
	return `${date.toLocaleDateString('en-US', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	})} as ${date.toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit'
	})}`
}
