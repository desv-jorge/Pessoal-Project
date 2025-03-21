import path from 'path';
import fs from 'fs';

export function getPhotos() {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    
    // Lê os arquivos da pasta
    const imageFiles = fs.readdirSync(imagesDirectory).filter(file =>
        /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
    );

    // Mapeia para o formato desejado
    return imageFiles.map(file => ({
        src: `/images/${file}`,
        alt: file.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '').replace(/_/g, ' ')
    }));
}
