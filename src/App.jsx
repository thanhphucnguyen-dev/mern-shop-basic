import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'


import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { Fragment } from 'react'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map(({ path, page: Page, isShowHeader }) => {
            const Layout = isShowHeader ? DefaultComponent : Fragment
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
