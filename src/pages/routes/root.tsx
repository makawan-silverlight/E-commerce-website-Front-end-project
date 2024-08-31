import Header from "../../components/Header"
import { Outlet } from "react-router-dom"
function Root() {
  return (
    <main>
        <Header/>
        <div id="detail">
            <Outlet/>
        </div>
    </main>
  )
}

export default Root