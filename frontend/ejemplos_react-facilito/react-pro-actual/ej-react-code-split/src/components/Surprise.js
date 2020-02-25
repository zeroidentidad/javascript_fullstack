import React, {useEffect} from 'react'

export const Surprise = () => {

    useEffect(() => {
        import('../functions/hello').then(func => func.default())
    }, [])

    return (
        <div>
            <p>Sorpresa! <span role="img" aria-label="Party Popper">🎉</span></p> 
        </div>
    )
}
