import Image from 'next/image';
import Link from 'next/link';

async function fetchPhotos(){
    const res = await fetch('http://jsonplaceholder.typicode.com/photos?_limit=20');
    return res.json();
}

export default async function GalleryPage() {
    const photos = await fetchPhotos();

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <p>Fetching photos...</p>

      <div className="p-10 grid grid-cols-3 gap-4">
        {photos.map((photo:any) => (
            <Link key={photo.id} href={`/gallery/${photo.id}`}>
                <Image
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    width={150}
                    height={150}
                    className="rounded--lg shadow-md hover:scale-105 transition-transform"
                />
            </Link>
        ))}
      </div>
    </div>
  );
}
