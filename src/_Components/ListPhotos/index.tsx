"use client";
import { Key } from "react";
import CardPhotos from "../CardPhotos";
import "./index.scss";

// Função para carregar dinamicamente todas as imagens da pasta 'images'
const importAll = (context: __WebpackModuleApi.RequireContext) =>
    context.keys().map((key: string) => key.replace('./', '/images/'));

const photos = importAll(require.context('/public/images', false, /\.(png|jpe?g|webp)$/));

export default function ListPhotos() {
    return (
        <div className="list-photos">
            {photos.map((photo: string, index: Key | null | undefined) => (
                <CardPhotos key={index} path={photo} />
            ))}
        </div>
    );
}
