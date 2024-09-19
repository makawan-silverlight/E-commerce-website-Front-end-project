import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store";
import ToastItem from "../../components/ToastItem";

function Root() {
  const toast = useSelector((state:RootState)=>state.toast.toast);
  return (
    <main>
        <Header/>
        <div id="detail">
            <Outlet/>
        </div>
        <Footer/>
        <div className="fixed bottom-4 right-4 z-[9999] max-w-[90%] flex flex-col items-end gap-2">
          {toast.map((data,index)=>{
            return <ToastItem key={index} data={data}/>
          })}
        </div>
    </main>
  )
}

export default Root