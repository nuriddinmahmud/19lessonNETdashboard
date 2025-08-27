"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

// usePathname = useLocation

const Header = () => {
  const path = usePathname()

  const activeClassName = (pathname:string) => {
    return path === pathname ? "underline text-blue-500" : ""
  }
  
  return (
    <div className="flex p-10 gap-4">
      <h2>Header</h2>
      <Link className={`uppercase ${activeClassName("/")}`} href={"/"}>Home</Link>
      <Link className={`uppercase ${activeClassName("/about")}`} href={"/about"}>Haqida</Link>
      <Link className={`uppercase ${activeClassName("/contact")}`} href={"/contact"}>Contact</Link>
      <Link className={`uppercase ${activeClassName("/about/news")}`} href={"/about/news"}>News</Link>
      <Link className={`uppercase ${activeClassName("/login")}`} href={"/login"}>Login</Link>
      <Link className={`uppercase ${activeClassName("/dashboard")}`} href={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default memo(Header);