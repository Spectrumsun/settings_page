import Setting from './Setting';
import Sidebar from './Sidebar';
import './index.css'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Setting />
    </div>
  );
}

export default App;
