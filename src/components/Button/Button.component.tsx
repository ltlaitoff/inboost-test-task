import { ButtonProps } from './Button.types';

function Button(props: ButtonProps) {
  return (
    <button
      className="py-2 px-4 text-base border border-slate-600 bg-white hover:bg-purple-100 rounded-md transition-all"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
