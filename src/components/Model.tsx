import type { JSX } from "react"

const Model = ({ children }: { children: JSX.Element }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Model