import { useEffect } from "react";

const Welcome = () => {
    
    useEffect(() => {
       const documentData = JSON.parse(localStorage.getItem('userData')!);
    }, [])

    return (
        <div>
            <h1>This is welcome page</h1>
        </div>
    )
}

export default Welcome
