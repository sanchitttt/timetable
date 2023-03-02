import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ThemeContext from "./global/contexts/ThemeContext";
import TeachersPage from "./pages/teachers_page";
import SubjectsPage from "./pages/subjects_page";
import ViewInvoicePage from './pages/view_invoices'
import TimetablePage from "./pages/timetable_page";

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let bodyEle = document.getElementById('body');
    bodyEle.style.background = theme === 'dark' ? "#141625" : "#F8F8FB"
  }, [theme]);
  
  
  return (
    <div className={`App`}>
      <ThemeContext.Provider value={{ themeValue: theme, changeTheme: setTheme }}>
        <Routes>
          <Route path='/teachers' element={<TeachersPage />} />
          <Route path='/subjects' element={<SubjectsPage />} />
          <Route path='/view/:id' element={<ViewInvoicePage />} /> 
          <Route path='/timetable' element={<TimetablePage />} /> 
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
