import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { Overview, Notifications, TradeHistory } from '../pages/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Overview />} />
        </Route>
        <Route path='/dashboard/' element={<Layout />} >
          <Route index element={<Overview />} />
          <Route path='overview' element={<Overview />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='trade-history' element={<TradeHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App