import { themeContext } from './App'
import "./Theme.css"


function ThemeContext() {
  const {theme,toggletheme}=useContext(themeContext)
  const handleClick=()=>{
    toggletheme()
  }
  const classColorName=`container-${theme}`
  return (
    <div className={classColorName}>
      <button type="submit" onClick={handleClick}>click</button>
      <p>current {theme}</p>
    </div>
  )
}

export default ThemeContext

