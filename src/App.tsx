import Header from './containers/Header/Header.component';
import Sidebar from './containers/Sidebar/Sidebar.component';
import Workspace from './containers/Workspace/Workspace.component';

function App() {
  return (
    <>
      <Header />

      <div className="flex">
        <Sidebar />
        <Workspace />
      </div>
    </>
  );
}

export default App;
