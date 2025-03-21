import Image from 'next/image';

interface CardPhotosProps {
    path: string;
}

export default function CardPhotos({ path }: CardPhotosProps) {
    return (
        <div id='card'>
            <Image 
                src={path.startsWith('/images/') ? path : `/images/${path}`} 
                alt="Imagem"
                width={360}
                height={380}
                id='img'
                unoptimized
                style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
        </div>
    );
}
