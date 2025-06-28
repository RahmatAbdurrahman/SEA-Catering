import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">Katering</h1>
      <div className="flex gap-4">
        <button onClick={toggleTheme} className="text-sm">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
      </div>
    </nav>
  );
}