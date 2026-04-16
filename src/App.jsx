import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Commercial from './pages/Commercial'
import Business from './pages/Business'

function App() {
  const [page, setPage] = useState(null)

  return (
    <>
      <Header updateFunction={setPage} />
        {!page && <Home updateFunction={setPage} />}
        {page === "Commercial" && <Commercial updateFunction={setPage} />}
        {page === "Business" && <Business updateFunction={setPage} />}
      <Footer />
    </>
  )
}

export default App
