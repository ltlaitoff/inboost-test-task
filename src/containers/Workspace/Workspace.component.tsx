import { ChangeEvent, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import './Workspace.component.css'

import { useStore } from '../../contexts/store.context'
import { transformDateForOutput } from './helpers'
import { updateNoteAction } from '../../store/store.actions'

function Workspace() {
	const { state, dispatch } = useStore()

	const currentNote = useMemo(() => {
		return state.notes.find(note => note.id === state.chosenNoteId)
	}, [state.notes, state.chosenNoteId])

	if (!currentNote) return null

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (!currentNote) return

		dispatch(
			updateNoteAction({
				...currentNote,
				content: e.target.value,
				date: new Date()
			})
		)
	}

	return (
		<main className="w-full h-full flex flex-col">
			<div className="mt-2 text-sm text-center text-slate-400">
				{transformDateForOutput(currentNote.date)}
			</div>

			{state.chosenNoteStatus === 'preview' && (
				<ReactMarkdown
					className="markdown-body mt-3 px-4 py-2 h-full overflow-y-scroll"
					remarkPlugins={[remarkGfm]}
				>
					{currentNote.content}
				</ReactMarkdown>
			)}

			{state.chosenNoteStatus === 'edit' && (
				<div className="mt-3 px-4 py-2 h-full">
					<textarea
						className="w-full h-full outline rounded-sm outline-2 outline-gray-400 outline-offset-4 focus-visible:outline-pink-400"
						onChange={e => onChange(e)}
						defaultValue={currentNote.content}
					></textarea>
				</div>
			)}
		</main>
	)
}

export default Workspace
