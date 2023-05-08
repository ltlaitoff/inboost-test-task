import classNames from 'classnames'
import { ButtonProps } from './Button.types'

function Button(props: ButtonProps) {
	const onClick = () => {
		if (props.disabled) return

		props.onClick?.()
	}

	return (
		<button
			className={classNames(
				'py-2 px-4 text-base border border-slate-600 text-slate-700 bg-white hover:bg-purple-100 rounded-md transition-all',
				props.className,
				{
					'bg-slate-200 hover:bg-slate-200 text-slate-400': props.disabled
				}
			)}
			onClick={onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}

export default Button
