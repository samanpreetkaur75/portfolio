import Navbar from './components/Navbar';
import BasicInformation from './components/BasicInformation';
import WorkExperience from './components/WorkExperiences';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';

function App() {
  return (
    <main>
      <Navbar />
      <BasicInformation />
      <WorkExperience />
      <Skills />
      <Resources />
      <DeveloperSetup />
    </main>
  );
}

export default App;
