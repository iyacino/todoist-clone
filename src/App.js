import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import { useState } from "react";
import { SearchContextProvider } from "./context/search-context";

export function App( { darkModeDefault = false }) {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <SearchContextProvider>
        <main data-testid='application' className={ darkMode ? 'darkmode' : undefined}>
          <div className="App">
              <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
              <Content darkMode={darkMode} setDarkMode={setDarkMode}/>
          </div>
        </main>
        </SearchContextProvider>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}
