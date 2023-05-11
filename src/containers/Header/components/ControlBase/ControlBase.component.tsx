import classnames from 'classnames'
import Button from '../../../../components/Button/Button.component'
import { ControlBaseProps } from './ControlBase.types'

function ControlBase(props: ControlBaseProps) {
	const onClick = () => {
		if (props.disabled) return

		props.onClick?.()
	}

	return (
		<Button
			className={classnames(
				'md:px-4 md:py-3 px-2 py-2  border-none',
				props.className
			)}
			onClick={onClick}
			disabled={props.disabled}
		>
			{props.children}
		</Button>
	)
}

export default ControlBase
