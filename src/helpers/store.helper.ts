import { Note } from '../store/store.types'

export function createEmptyNote(): Note {
	const data = new Date(Date.now())
	const id = `note-${data.getTime()}`

	return {
		id: id,
		date: data,
		content: ''
	}
}
