import React from "react";
import withLoader from "./withLoader";

const User = () => {
    const user = {
        name: "El Mahid Hakmoune",
        email: "mehdi.hakmoune@.gmail.com"
    }

    return (<div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>)
}

export default withLoader(User);