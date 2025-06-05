import Image from 'next/image';

async function getPhoto(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch photo with id ${id}`);
  }
  
  const photo = await res.json();
  return {
    ...photo,
    url: `https://placehold.co/1000x1000`,
  };

}

export default async function PhotoDetail({ params }: { params: { id: string } }) {
  const photo = await getPhoto(params.id);

  return (
    <div className="flex flex-col items-center p-10">
      <Image src={photo.url} alt={photo.title} width={300} height={300} className="rounded-lg shadow-md"/>
      <h2 className="text-xl mt-4">{photo.title}</h2>
    </div>
  );
}
