import { getLineContent } from './getLineContent.helper'

const UNTITLED = 'Untitled'
const UNCONTENT = 'Uncontent'

export function getTitleByContent(content: string) {
	return getLineContent(content, 0, UNTITLED)
}

export function getContentPreviewByContent(content: string) {
	return getLineContent(content, 1, UNCONTENT)
}
