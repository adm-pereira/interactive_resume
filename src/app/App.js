import resumeData from '../utils/resume.json';
import Resume from './structure/Resume';

function App() {
  return (
    <div className="App">
      <Resume resume={resumeData}/>
    </div>
  );
}

export default App;
