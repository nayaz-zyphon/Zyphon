import { type JSX } from 'react'
import NavBar from './NavBar'

const CommonLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <div className='min-h-screen relative bg-black w-full overflow-x-clip'>
            <NavBar />

            {children}
        </div>
    )
}

export default CommonLayout