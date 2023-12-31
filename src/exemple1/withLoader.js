import React, { useState } from "react";

const withLoader = (WrappedComponent) => {
    return (props) => {
        const [loading, setLoading] = useState(true);

        // The setTimeout() method calls a function after a number of milliseconds.
        // Par exemple ici nous pouvons avoir un call d'api 
        setTimeout(() => {
            setLoading(false)
        }, 2000);

        return (<div>
            {loading ? <p>Loading...</p> : <WrappedComponent {...props} />}
        </div>)
    }
}

export default withLoader;