"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function getPhoto(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch photo with id ${id}`);
  }
  return await res.json();
}

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [photo, setPhoto] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPhoto(params.id);
      setPhoto({
        ...data,
        url: `https://placehold.co/1000x1000`,
      });
    }
    fetchData();
  }, [params.id]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.back();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Image src={photo.url} alt={photo.title} width={500} height={500} className="rounded-lg" />
        <h2 className="text-xl mt-4">{photo.title}</h2>
        <button onClick={() => router.back()} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
}
