import { openDB, IDBPDatabase } from 'idb'
import { RootState } from '../../store/store.types'

let database: null | Promise<IDBPDatabase<RootState>> = null

export async function intialize() {
	database = openDB('apple-notes-copy', 1, {
		upgrade(db, oldVersion) {
			switch (oldVersion) {
				case 0:
					db.createObjectStore('store')
					break
			}
		}
	})
}

export async function updateStore(state: RootState) {
	if (database === null) return

	const transaction = (await database).transaction('store', 'readwrite')
	const store = transaction.objectStore('store')

	await store.put(state.search, 'search')
	await store.put(state.chosenNoteId, 'chosenNoteId')
	await store.put(state.notes, 'notes')
	await store.put(state.chosenNoteStatus, 'chosenNoteStatus')
}

export async function getStore(): Promise<RootState | undefined> {
	console.log('getStore')

	if (database === null) return

	const transaction = (await database).transaction('store', 'readwrite')
	const store = transaction.objectStore('store')

	return {
		chosenNoteId: await store.get('chosenNoteId'),
		search: await store.get('search'),
		notes: await store.get('notes'),
		chosenNoteStatus: await store.get('chosenNoteStatus')
	}
}
