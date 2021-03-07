import './App.css';
import Feed from './components/feed';
import UserInput from './components/userInput';


function App() {
  return (
    <div>

      <header>
        <h1>Miniature-Project-Hub</h1> {/* main website heading - final title to be decided on*/}
      </header>
      <p className="intro">Share your projects and works in progress!</p>
        <div>
          <UserInput /> {/* UI for user upload function */}
        </div>

        <div>
          <Feed /> {/* Main feed of site, scrollable with each entry open for interaction from user */ }
        </div>

    </div>
  );
}

export default App;
