export interface Note {
	id: string
	date: Date
	content: string
}

export interface RootState {
	search: string
	notes: Note[]
	chosenNoteId: string
}