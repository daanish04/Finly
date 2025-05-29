import Image from "next/image";
import Link from "next/link";
import HeaderActions from "./headerActions";

const Header = () => {
  return (
    <div className="sticky top-0 w-full backdrop-blur-lg bg-white/30 border border-gray-200 z-20 dark:bg-zinc-900/30 dark:border-zinc-800">
      <nav className="flex justify-between items-center px-4 py-2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Finly Logo"
            width={80}
            height={100}
            className="h-20 object-contain"
          />
        </Link>
        <HeaderActions /> {/* ✅ interactive/auth/toggle UI */}
      </nav>
    </div>
  );
};

export default Header;
