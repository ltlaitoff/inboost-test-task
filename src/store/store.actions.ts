import { Note } from './store.types';

export const UPDATE_NOTE = 'UPDATE_NOTE';

type SetSearchAction = {
  type: 'SET_SEARCH';
  payload: string;
};

export function setSearchAction(value: string): SetSearchAction {
  return {
    type: 'SET_SEARCH',
    payload: value,
  };
}

type AddNoteAction = {
  type: 'ADD_NOTE';
  payload: Note;
};

export function addNoteAction(value: Note): AddNoteAction {
  return {
    type: 'ADD_NOTE',
    payload: value,
  };
}

type DeleteNoteAction = {
  type: 'DELETE_NOTE';
  payload: Note;
};

export function deleteNoteAction(value: Note): DeleteNoteAction {
  return {
    type: 'DELETE_NOTE',
    payload: value,
  };
}

type SetChosenNoteIdAction = {
  type: 'SET_CHOSEN_NOTE_ID';
  payload: string;
};

export function setChosenNoteIdAction(value: string): SetChosenNoteIdAction {
  return {
    type: 'SET_CHOSEN_NOTE_ID',
    payload: value,
  };
}

type UpdateNoteAction = {
  type: 'UPDATE_NOTE';
  payload: Note;
};

export function updateNoteAction(value: Note): UpdateNoteAction {
  return {
    type: 'UPDATE_NOTE',
    payload: value,
  };
}

export type StoreActions =
  | SetSearchAction
  | AddNoteAction
  | DeleteNoteAction
  | SetChosenNoteIdAction
  | UpdateNoteAction;
