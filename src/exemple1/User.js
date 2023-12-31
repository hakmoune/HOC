import React from "react";

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

export default User;