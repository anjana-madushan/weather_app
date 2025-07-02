import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <div className="min-h-screen pb-15">
      <div className="flex-grow">
        <Dashboard />
      </div>

      <Footer />
    </div>
  )
}

export default App
