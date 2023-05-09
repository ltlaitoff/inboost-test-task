export function getTitleByContent(content: string) {
	if (content.length === 0) {
		return 'Untitled'
	}

	return 'With title unknown'
}
