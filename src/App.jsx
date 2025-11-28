import './App.css'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'

function App() {

  return (
    <>
    <div className="app min-h-screen bg-background">
      <Navbar />
      <main>
        <Layout />
      </main>
    </div>
    </>
  )
}

export default App
