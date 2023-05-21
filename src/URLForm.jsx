import React, { useContext, useState } from "react";
import { SetBackendUrl } from "./Contexts";

const URLForm = () => {
    const setBackendUrl = useContext(SetBackendUrl);
    const [input, setInput] = useState("http://localhost:8000/message");
    const handleSubmit = (e) => {
        e.preventDefault();
        setBackendUrl(input);
    };

    return (
        <form onSubmit={handleSubmit} className="url-form">
            <input type="text" value={input} onChange={setInput} />

            <button type="submit">Update URL</button>
        </form>
    );
};

export default URLForm;
