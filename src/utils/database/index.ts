import { RootState } from '../../store/store.types'
import * as indexdb from './indexdb.util'

function intialize() {
	return indexdb.intialize()
}

function updateStore(state: RootState) {
	return indexdb.updateStore(state)
}

function getStore() {
	return indexdb.getStore()
}

const database = {
	intialize,
	updateStore,
	getStore
}

export { database }
