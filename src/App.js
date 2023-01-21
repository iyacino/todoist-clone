import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import { useState } from "react";

export function App( { darkModeDefault = false }) {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main data-testid='application' className={ darkMode ? 'darkmode' : undefined}>
          <div className="App">
              <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
              <Content darkMode={darkMode} setDarkMode={setDarkMode}/>
          </div>
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}
