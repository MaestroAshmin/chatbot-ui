import React, { useEffect, useState } from "react";
import swinburneLogo from "./logo.png";
import axios from "axios";

const StreamingMessage = (props) => {
    const prompt = props.state.messages[props.state.messages.length - 1].message;
    const [generatedText, setGeneratedText] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                string: prompt,
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
