export function transformDateForOutput(date: Date): string {
	const todayDate = new Date(Date.now())

	if (todayDate.setHours(0, 0, 0, 0) === new Date(date).setHours(0, 0, 0, 0)) {
		return date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit'
		})
	}

	return date.toLocaleDateString('en-US', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	})
}
