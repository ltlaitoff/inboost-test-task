import classNames from 'classnames'
import { ButtonProps } from './Button.types'

function Button(props: ButtonProps) {
	return (
		<button
			className={classNames(
				'py-2 px-4 text-base border border-slate-600 text-slate-700 bg-white hover:bg-purple-100 rounded-md transition-all',
				props.className
			)}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default Button
