"use client"
import { SIDEBAR_LINKS } from '../../static/dashbio';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

type SidebarLink = {
  id: string | number;
  link: string;
  title: string;
};

const Sidebar = () => {
  const path = usePathname();
  const activeClassName = (pathname: string) => (
	path === pathname ? "bg-white text-slate-900" : "hover:bg-white/10"
  );

  return (
	<div className="w-[250px] h-screen overflow-auto bg-slate-900 p-4 text-white">
	  <h2>Dashboard</h2>
	  <ul className="my-10">
		{SIDEBAR_LINKS?.map((item: SidebarLink) => (
		  <li key={item.id}>
			<Link
			  className={`p-2 mb-2 rounded-xl flex ${activeClassName(item.link)}`}
			  href={item.link}
			>
			  {item.title}
			</Link>
		  </li>
		))}
	  </ul>
	</div>
  );
};

export default memo(Sidebar);