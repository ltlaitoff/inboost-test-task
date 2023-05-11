import { ConfirmDeletionModalProps } from './ConfirmDeletionModal.types'

function ConfirmDeletionModal({ onClose, onYes }: ConfirmDeletionModalProps) {
	return (
		<div className="absolute top-0 left-0 h-full w-full bg-slate-800 bg-opacity-30">
			<div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-36 px-6 py-4 rounded-xl border border-slate-500 bg-white flex flex-col justify-between">
				<div className="text-lg text-center mt-4">
					Confirm <span className="text-pink-600 font-bold">note</span> deletion
				</div>
				<div className="flex justify-between">
					<button
						className="w-24 px-4 py-2 rounded-md bg-red-300 hover:bg- transition-all"
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						className="w-24 px-4 py-2 rounded-md bg-green-300 transition-all"
						onClick={onYes}
					>
						Yes
					</button>
				</div>
			</div>
		</div>
	)
}

export default ConfirmDeletionModal
