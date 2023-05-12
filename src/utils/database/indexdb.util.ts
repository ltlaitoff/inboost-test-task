import { openDB, IDBPDatabase } from 'idb'
import { RootState } from '../../store/store.types'

let database: null | Promise<IDBPDatabase<RootState>> = null

export async function intialize() {
	database = openDB('apple-notes-copy', 1, {
		async upgrade(db, oldVersion) {
			switch (oldVersion) {
				case 0: {
					db.createObjectStore('store')

					break
				}
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
	await store.put(state.sidebarOpened, 'sidebarOpened')
}

export async function getStore(): Promise<RootState | undefined> {
	if (database === null) return

	const transaction = (await database).transaction('store', 'readwrite')
	const store = transaction.objectStore('store')

	const chosenNoteId = await store.get('chosenNoteId')
	const search = await store.get('search')
	const notes = await store.get('notes')
	const chosenNoteStatus = await store.get('chosenNoteStatus')
	const sidebarOpened = await store.get('sidebarOpened')

	if (
		chosenNoteId == undefined ||
		search == undefined ||
		notes == undefined ||
		chosenNoteStatus == undefined ||
		sidebarOpened == undefined
	)
		return

	return {
		chosenNoteId,
		search,
		notes,
		chosenNoteStatus,
		sidebarOpened
	}
}
