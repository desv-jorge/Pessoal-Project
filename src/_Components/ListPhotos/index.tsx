"use client";
import { useEffect, useState } from "react";
import CardPhotos from "../CardPhotos";
import "./index.scss";

export default function ListPhotos() {
    const [photos, setPhotos] = useState<string[]>([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await fetch("/api/photos"); // Certifique-se que a URL está correta
                if (!res.ok) throw new Error("Erro ao carregar imagens");

                const data = await res.json();
                setPhotos(data);
            } catch (error) {
                console.error("Erro ao carregar as fotos:", error);
            }
        };
        fetchPhotos();
    }, []);

    return (
        <div className="list-photos">
            {photos.map((photo, index) => (
                <CardPhotos key={index} path={photo} />
            ))}
        </div>
    );
}
