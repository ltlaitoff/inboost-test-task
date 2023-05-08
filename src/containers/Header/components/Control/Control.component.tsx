import Button from '../../../../components/Button/Button.component'
import { ControlProps } from './Control.types'

function Control(props: ControlProps) {
	const onClick = () => {
		if (props.disabled) return

		props.onClick?.()
	}

	return (
		<Button
			className="px-4 py-3 border-none"
			onClick={onClick}
			disabled={props.disabled}
		>
			{props.children}
		</Button>
	)
}

export default Control
