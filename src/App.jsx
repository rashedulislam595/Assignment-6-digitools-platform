import './App.css'
import Benner from './components/benner_section/Benner'
import StatsSection from './components/stats_section/StatsSection'
import Navbar from './components/navbar/Navbar'
import StepsSection from './components/steps_section/StepsSection'

function App() {


  return (
    <>
      <Navbar/>
      <Benner/>
      <StatsSection/>
      <StepsSection/>
    </>
  )
}

export default App
