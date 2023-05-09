import classNames from 'classnames'
import { useStore } from '../../contexts/store.context'
import { setChosenNoteIdAction } from '../../store/store.actions'
import {
	getContentPreviewByContent,
	getTitleByContent,
	transformDateForOutput
} from './helpers'

function Sidebar() {
	const { state, dispatch } = useStore()

	const onItemClick = (id: string) => {
		dispatch(setChosenNoteIdAction(id))
	}

	return (
		<aside className="max-w-xs w-full h-full border-r-[1px] border-r-gray-200">
			<ul>
				{state.notes.map(item => {
					return (
						<li key={item.id}>
							<button
								onClick={() => onItemClick(item.id)}
								className={classNames(
									'px-6 py-2 text-left w-full border-b-[1px]',
									{
										'bg-slate-200': state.chosenNoteId === item.id
									}
								)}
							>
								<div className="font-bold">
									{getTitleByContent(item.content)}
								</div>
								<div className="flex gap-x-3 items-center font-light text-gray-500">
									<div className="">{transformDateForOutput(item.date)}</div>
									<div className="text-sm font-light">
										{getContentPreviewByContent(item.content)}
									</div>
								</div>
							</button>
						</li>
					)
				})}
			</ul>
		</aside>
	)
}

export default Sidebar
