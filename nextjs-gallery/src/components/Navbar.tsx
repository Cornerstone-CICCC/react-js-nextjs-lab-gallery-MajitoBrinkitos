import Link from 'next/link';

export default function Navbar() {
  return (
    <>
    <nav className="bg-gray-800 text-white flex items-center justify-between p-4">
        <img className="flex h-10" src="/logo.svg" alt="logo home page" />
        <div className='flex gap-4'>
            <Link href="/" className="hover:underline flex text-[24px]">Home</Link>
            <Link href="/gallery" className="hover:underline flex text-[24px]">Gallery</Link>
        </div>
    </nav>
    </>
  );
}
