import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Timeline from "./pages/Timeline.tsx";
import Grid from "./pages/Grid.tsx";
import Detail from "./pages/Detail.tsx";

function App() {
  return (
      <Router>
          <Layout>
              <Routes>
                  <Route path="/timeline" element={<Timeline/>}/>
                  <Route path="/grid" element={<Grid/>}/>
                  <Route path="/pokemon/:id" element={<Detail/>}/>
                  <Route path="*" element={<Timeline />} />
              </Routes>
          </Layout>
      </Router>
  )
}

export default App
