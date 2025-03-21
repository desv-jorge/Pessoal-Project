import Image from 'next/image';

interface CardPhotosProps {
    path: string;
}

export default function CardPhotos({ path }: CardPhotosProps) {
    return (
        <div id='card'>
            <Image 
                src={path} 
                alt="Imagem"
                width={380}
                height={400}
                id='img'
                unoptimized
                style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
        </div>
    );
}
