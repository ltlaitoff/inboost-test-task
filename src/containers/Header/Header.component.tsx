import Controls from './components/Controls/Controls.component';
import SearchBox from './components/SearchBox/SearchBox.component';

function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto flex justify-between">
        <Controls />
        <SearchBox />
      </div>
    </header>
  );
}

export default Header;
