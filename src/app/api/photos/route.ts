import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    const photos = fs.readdirSync(imagesDirectory).map((file) => `/images/${file}`);

    return NextResponse.json(photos);
}
