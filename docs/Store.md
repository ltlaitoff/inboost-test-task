Store as `React Context`

```ts
interface Note {
	date: Date,
	content: string
}

interface RootStore {
	search: string
	notes: Note
	chosenNoteId: string
}
```

Actions:

```ts
const SET_SEARCH = 'SET_SEARCH'
const ADD_NOTE = 'ADD_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'
const SET_CHOSEN_NOTE_ID = 'SET_CHOSEN_NOTE_ID'
const UPDATE_NOTE = 'UPDATE_NOTE'
```