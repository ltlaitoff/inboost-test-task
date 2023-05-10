export function getLineContent(
	content: string,
	lineNumber: number,
	defaultMessage: string
) {
	if (content.length === 0) return defaultMessage

	const splitedContent = content.split('\n').filter(item => item !== '')

	const line = splitedContent[lineNumber]

	if (!line) return defaultMessage

	const contentLineWithReplacing = line
		.replaceAll('#', '')
		.replaceAll('`', '')
		.trim()

	if (contentLineWithReplacing.length === 0) {
		return defaultMessage
	}

	return line.trim()
}
