import { ChangeEvent } from 'react';
import { useStore } from '../../../../contexts/store.context';
import { setSearchAction } from '../../../../store/store.actions';

function SearchBox() {
  const { state, dispatch } = useStore();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setSearchAction(e.target.value));
  }

  return (
    <div className="py-2">
      <input
        className="h-full px-3 text-slate-600 rounded-md hover:border-2 hover:border-purple-400"
        placeholder="Search"
        value={state.search}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;
