import React, { useContext, useEffect, useState } from "react";
import swinburneLogo from "./logo.png";
import { BackendUrl } from "./Contexts";

const StreamingMessage = (props) => {
    console.log(props);
    const prompt = props.state.messages[props.state.messages.length - 1];
    const [generatedText, setGeneratedText] = useState(prompt.noPrompt ? prompt.message : "");
    const backendUrl = useContext(BackendUrl);

    useEffect(() => {
        if (prompt.noPrompt) {
            return;
        }
        fetch(backendUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                string: prompt.message,
            }),
        }).then(async (response) => {
            if (!response.body) return;
            const reader = response.body.pipeThrough(new window.TextDecoderStream()).getReader();
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                setGeneratedText((prev) => prev.concat(value));
            }
        });
    }, []);

    return (
        <div className="streaming-message">
            <div className="streaming-message__image">
                <img src={swinburneLogo} alt="swinburne logo" />
            </div>

            <div className="streaming-message__text-wrapper">{generatedText}</div>
        </div>
    );
};
export default StreamingMessage;
