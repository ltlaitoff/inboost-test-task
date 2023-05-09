import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import './Workspace.component.css'

import { useStore } from '../../contexts/store.context'
import { transformDateForOutput } from './helpers'

function Workspace() {
	const { state } = useStore()

	const currentNote = useMemo(() => {
		return state.notes.find(note => note.id === state.chosenNoteId)
	}, [state.notes, state.chosenNoteId])

	if (!currentNote) return null

	return (
		<main className="w-full">
			<div className="mt-2 text-sm text-center text-slate-400">
				{transformDateForOutput(currentNote.date)}
			</div>

			<ReactMarkdown
				className="mt-3 markdown-body px-4 py-2"
				remarkPlugins={[remarkGfm]}
			>
				{currentNote.content}
			</ReactMarkdown>
		</main>
	)
}

export default Workspace
