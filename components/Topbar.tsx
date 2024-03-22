"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
	{ name: "Discussion Forum", href: "/discussion-forum" },
	{ name: "Market Stories", href: "/market-stories" },
];

const Topbar = () => {
	const pathName = usePathname();
	return (
		<nav className="flex bg-blue-800 text-white justify-around fixed top-0 right-0 left-0 sm:hidden">
			{navLinks.map((link) => {
				const isActive = pathName.startsWith(link.href);
				return (
					<Link
						key={link.name}
						className={`w-full h-full px-2 py-4 text-center ${
							isActive
								? "bg-blue-900 shadow-[inset_0px_-5px_0px_0px_rgba(230,35,35,1)]"
								: ""
						}`}
						href={link.href}
					>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Topbar;
