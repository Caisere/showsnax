import { useEffect } from "react";


export function useKey (key, action) {
        useEffect(() => {
            function callBack (e) {
                if (e.code.toLowerCase() === key.toLowerCase()) {
                    action();
                    console.log('CLOSED')
                }
            }
            document.addEventListener('keydown', callBack);
            // clean up function 
            return function () {
                document.removeEventListener('keydown', callBack);
            }
        }, [action, key])
    
}