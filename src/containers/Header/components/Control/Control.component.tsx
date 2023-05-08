import Button from '../../../../components/Button/Button.component';
import { ControlProps } from './Control.types';

function Control(props: ControlProps) {
  return (
    <Button className="px-4 py-3 border-none" onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

export default Control;
