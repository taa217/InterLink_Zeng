import Link from 'next/link';
import ProfilePicture from './profile';


const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
      <div className="flex items-center">
        <ProfilePicture src="/profile-pic.png" />
        <Link href="/">
          <p className="text-lg font-semibold ml-2">Your App Name</p>
        </Link>
      </div>
      <div className="flex items-center ml-auto">
        <Link href="/search">
          <p className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="10.5" cy="10.5" r="7.5"></circle>
              <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
            </svg>
          </p>
        </Link>
        <Link href="/messages">
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L2 22h20V2z"></path>
              <path d="M15 10c.5-.5 1.3-.5 1.8 0l4 4c.5.5.5 1.3 0 1.8l-4 4c-.5.5-1.3.5-1.8 0l-4-4c-.5-.5-.5-1.3 0-1.8l4-4z"></path>
            </svg>
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;