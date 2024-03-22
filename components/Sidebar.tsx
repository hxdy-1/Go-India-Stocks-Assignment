"use client";

import Image from "next/image";
import React, { useState } from "react";
import RightArrow from "../public/right-arrow.svg";
import LeftArrow from "../public/left-arrow.svg";
import User from "../public/user.svg";
import Bell from "../public/bell.svg";
import DiscussionForumIcon from "../public/discussion-forum-icon.svg";
import Money from "../public/money.svg";

const SIDEBAR_LINKS = [
	{
		image: DiscussionForumIcon,
		text: "Discussion Forum",
	},
	{
		image: Money,
		text: "Market Stories",
	},
	// dummy data:
	{
		image: DiscussionForumIcon,
		text: "Sentiment",
	},
	{
		image: Money,
		text: "Market",
	},
	{
		image: DiscussionForumIcon,
		text: "Sector",
	},
	{
		image: Money,
		text: "Watchlist",
	},
	{
		image: DiscussionForumIcon,
		text: "Events",
	},
	{
		image: Money,
		text: "News/Interviews",
	},
];

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const sidebarToggler = () => {
		// console.log(isOpen);
		setIsOpen((prev) => !prev);
	};

	return (
		<nav
			className={`flex flex-col h-screen items-center bg-blue-900 fixed z-10 ${
				isOpen ? "w-[60%]" : "w-0"
			} top-0 left-0 cursor-pointer transition-all duration-500 sm:relative ${
				isOpen ? "sm:w-[30%]" : "w-0"
			}`}
		>
			<div
				onClick={sidebarToggler}
				className={`toggler flex justify-center items-center fixed top-[40%] transition-all duration-500 ${
					isOpen ? "left-[60%]" : "left-0"
				} bg-blue-900 w-[1.5rem] h-[8rem] rounded-tr rounded-br sm:absolute sm:left-full sm:top-1/3`}
			>
				{isOpen ? (
					<Image src={LeftArrow} alt="left arrow" />
				) : (
					<Image src={RightArrow} alt="right arrow" />
				)}
			</div>
			<div
				className={`w-full py-8 px-4 flex items-center gap-4 border-blue-200 border-b ${
					isOpen ? "flex" : "hidden"
				}`}
			>
				<Image
					className="rounded-full"
					width={40}
					height={40}
					src={User}
					alt="profile photo"
				/>
				<p className="text-left text-white sm:text-lg font-semibold">
					Hello, User
				</p>
				<Image
					className="ml-auto"
					width={40}
					height={40}
					src={Bell}
					alt="notifications"
				/>
			</div>
			<ul
				className={`capitalize  font-semibold text-white flex flex-col gap-2 mt-6 w-full ${
					isOpen ? "flex" : "hidden"
				}`}
			>
				{SIDEBAR_LINKS.map((link) => (
					<li
						className="flex font-semibold px-4 py-2 hover:bg-blue-950 rounded"
						key={link.text}
					>
						<Image src={link.image} alt={link.text} />
						<p className="ml-2">{link.text}</p>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Sidebar;
