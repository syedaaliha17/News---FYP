import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TextToSpeech = ({ text }) => {
    const { state } = useLocation();
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState(null);
    const [voice, setVoice] = useState(null);
    // const [intervalId, setIntervalId] = useState(null);
    // const [highlightedIndex, setHighlightedIndex] = useState(-1);
    // const words = state?.description.split("")

    // const startHighlightMovement = () => {
    //     const id = setInterval(() => {
    //         setHighlightedIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
    //     },1000);
    //     setIntervalId(id);
    // };

    // const stopHighlightMovement = () => {
    //     clearInterval(intervalId);
    //     setIntervalId(null);
    //     setHighlightedIndex(-1);
    // };

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        const voices = synth.getVoices();

        setUtterance(u);
        setVoice(voices[0]);

        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        } else {
            utterance.voice = voice;
            synth.speak(utterance);
        }

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    };

    const handleVoiceChange = (event) => {
        const voices = window.speechSynthesis.getVoices();
        setVoice(voices.find((v) => v.name === event.target.value));
    };

    return (
        <div className="container">

            <label style={{ display: "inline-flex", fontWeight: "bold", fontSize: "16px", margin: "5px" }}>
                <p style={{ fontWeight: "bold", fontSize: "18px", margin: "9px" }}>Accent:</p>
                <select value={voice?.name} onChange={handleVoiceChange}>
                    {window.speechSynthesis.getVoices().map((voice) => (
                        <option key={voice.name} value={voice.name}>
                            {voice.name}
                        </option>
                    ))}
                </select>
            </label>

            <button className="btn btn-lg" style={{ background: "#322D31", color: "white", margin: "5px", fontSize: "16px" }} onClick={handlePlay}> {isPaused ? "Resume" : "Play"}</button>
            <button className="btn btn-lg" style={{ background: "#322D31", color: "white", margin: "5px", fontSize: "16px" }} onClick={handlePause}>Pause</button>
            <button className="btn btn-lg" style={{ background: "#322D31", color: "white", margin: "5px", fontSize: "16px" }} onClick={handleStop}>Stop</button>

            {/* <p style={{ textAlign: "justify", fontSize: "18px", margin: "20px" }}>
                {words.map((word, index) => (
                    <span
                        key={index}
                        className={index === highlightedIndex ? 'highlighted' : ''}
                    >
                        {word}
                    </span>
                ))}
            </p> */}
        </div>
    );
};

export default TextToSpeech;