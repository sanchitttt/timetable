import React, { useContext } from 'react'
import ThemeContext from '../../global/contexts/ThemeContext';

function Button4({ children }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;
  return (
    <div
      role='button'
      aria-describedby='button'
      className={`w-[133px] h-[48px] flex items-center justify-center bg-[#373B53] ${themeValue === 'light' ? "hover:bg-08" : "hover:bg-03"} rounded-full duration-75 `}
    >
      <div className={`${themeValue === 'dark' ? " text-05 " : " text-06 "} font-bold`}>
        {children}
      </div>
    </div>
  )
}

export default Button4