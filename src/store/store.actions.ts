import { Note, RootState } from './store.types'

export const UPDATE_NOTE = 'UPDATE_NOTE'

type SetStateAction = {
	type: 'SET_STATE'
	payload: RootState
}

export function setStateAction(value: RootState): SetStateAction {
	return {
		type: 'SET_STATE',
		payload: value
	}
}

type SetSearchAction = {
	type: 'SET_SEARCH'
	payload: string
}

export function setSearchAction(value: string): SetSearchAction {
	return {
		type: 'SET_SEARCH',
		payload: value
	}
}

type AddNoteAction = {
	type: 'ADD_NOTE'
	payload: Note
}

export function addNoteAction(value: Note): AddNoteAction {
	return {
		type: 'ADD_NOTE',
		payload: value
	}
}

type DeleteNoteAction = {
	type: 'DELETE_NOTE'
	payload: string
}

export function deleteNoteAction(value: string): DeleteNoteAction {
	return {
		type: 'DELETE_NOTE',
		payload: value
	}
}

type SetChosenNoteIdAction = {
	type: 'SET_CHOSEN_NOTE_ID'
	payload: string
}

export function setChosenNoteIdAction(value: string): SetChosenNoteIdAction {
	return {
		type: 'SET_CHOSEN_NOTE_ID',
		payload: value
	}
}

type UpdateNoteAction = {
	type: 'UPDATE_NOTE'
	payload: Note
}

export function updateNoteAction(value: Note): UpdateNoteAction {
	return {
		type: 'UPDATE_NOTE',
		payload: value
	}
}

type SetChosenNoteStatusAction = {
	type: 'CHOSEN_NOTE_STATUS'
	payload: 'edit' | 'preview'
}

export function setChosenNoteStatusAction(
	value: 'edit' | 'preview'
): SetChosenNoteStatusAction {
	return {
		type: 'CHOSEN_NOTE_STATUS',
		payload: value
	}
}

export type StoreActions =
	| SetStateAction
	| SetSearchAction
	| AddNoteAction
	| DeleteNoteAction
	| SetChosenNoteIdAction
	| UpdateNoteAction
	| SetChosenNoteStatusAction
