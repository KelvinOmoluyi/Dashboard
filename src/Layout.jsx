import { SideBar, NavBar } from '../components/index'
import { Outlet } from 'react-router-dom'
import "./App.css"
import { useStateContext } from '../context/ContextProvider'
import { useEffect, useState } from 'react'

const Layout = () => {
    const{  isSidebarActive, handleResize } = useStateContext();

    useEffect(() => {
        window.addEventListener("resize", handleResize(window.innerWidth));

        return () => window.removeEventListener("resize", handleResize(window.innerWidth));
    }, []);

    return (
    <main className='h-screen max-h-screen flex'>
        <div style={isSidebarActive ? { display: "block" } : { display: "none" }}>
          <SideBar />
        </div>

        <div 
        className='w-full ml-3 h-screen pr-2 pl-1 overflow-y-scroll'
        style={isSidebarActive ? { overflowX: 'hidden' } : {}}
        >
          <NavBar />
          <div>
            <Outlet />
          </div>
        </div>
    </main>
  )
}
 
export default Layout;