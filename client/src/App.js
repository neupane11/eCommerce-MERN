import './App.css'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router,Route} from 'react-router-dom'

//Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className='App'>
      <Router>
      <Header />
      <main className='py-5'>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={ProductPage}/>
         
        </Container>
      </main>
      <Footer />
      </Router>
    </div>
  )
}

export default App
