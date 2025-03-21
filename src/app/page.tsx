"use client";
import { useState, useRef } from "react";
import HeaderPage from "@/_Components/HeadPage";
import ListPhotos from "@/_Components/ListPhotos";
import "./Home.scss"; // Para estilizar a tela de boas-vindas

export default function Home() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleEnterClick = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/musica.mp3');
            audioRef.current.currentTime = 65; // Começa aos 60 segundos (1 minuto)
        }

        audioRef.current.play();
        setIsPlaying(true);
        setShowWelcome(false);
    };

    const handleToggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            {showWelcome ? (
                <div className="welcome-screen">
                    <h1>Bem-vindo ao acervo Luz da vida!</h1>
                    <p>um pouquinho sobre a nossa caminhada</p>
                    <button onClick={handleEnterClick}>Entrar</button>
                </div>
            ) : (
                <>
                    <HeaderPage />
                    <div id="container-button">
                        <button id="button" onClick={handleToggleMusic}>
                            {isPlaying ? "Pausar Música" : "Continuar Música"}
                        </button>
                    </div>
                    <ListPhotos />
                </>
            )}
        </>
    );
}
