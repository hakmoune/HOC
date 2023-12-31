import './App.css';
import withLoader from './exemple1/withLoader';
import User from './exemple1/User';

const UserWithLoader = withLoader(User);

function App() {
  return (
    <div className="App">
      <h1>Higher Order Component</h1>
      <UserWithLoader />
    </div>
  );
}

export default App;
