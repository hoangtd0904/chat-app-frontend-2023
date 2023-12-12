import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
import { publicRoutes } from "@/routes"
import { DefaultLayout } from "@/components/Layout"
import { Fragment } from "react"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map( (route, idx) => { 
            const Page = route.element

            let Layout : any = DefaultLayout 

            if(route.layout) {
              Layout = route.layout
            } else if(route.layout === null) {
              Layout = Fragment
            }

            return <Route key={idx} path={route.path} element={
              <Layout>
                <Page/>
              </Layout>
            }/>}
          )}  
        </Routes>  
      </div>
    </Router>
    )
}

export default App
