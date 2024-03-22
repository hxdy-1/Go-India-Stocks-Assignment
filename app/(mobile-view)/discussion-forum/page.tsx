"use client";

import React from "react";
import ProfilePicture from "../../../public/60111.jpg";
import UserPostCard from "../../../components/UserPostCard";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type UserDetails = {
	profilePicture: StaticImageData;
	name: string;
	sector: number;
	description: string;
	likes: number;
	views: number;
	comments: number;
	lastSeen: number;
};

const USER_DETAILS: UserDetails[] = [
	{
		profilePicture: ProfilePicture,
		name: "lorem ipsum",
		sector: 2,
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur a unde, explicabo numquam non placeat. Consequatur a unde, explicabo numquam non placeat.",
		likes: 2,
		views: 2,
		comments: 2,
		lastSeen: 2,
	},
	{
		profilePicture: ProfilePicture,
		name: "lorem ipsum",
		sector: 2,
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur a unde, explicabo numquam non placeat. Consequatur a unde, explicabo numquam non placeat.",
		likes: 2,
		views: 2,
		comments: 2,
		lastSeen: 2,
	},
	{
		profilePicture: ProfilePicture,
		name: "lorem ipsum",
		sector: 2,
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur a unde, explicabo numquam non placeat. Consequatur a unde, explicabo numquam non placeat.",
		likes: 2,
		views: 2,
		comments: 2,
		lastSeen: 2,
	},
	{
		profilePicture: ProfilePicture,
		name: "lorem ipsum",
		sector: 2,
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur a unde, explicabo numquam non placeat. Consequatur a unde, explicabo numquam non placeat.",
		likes: 2,
		views: 2,
		comments: 2,
		lastSeen: 2,
	},
];

const page = () => {
	const router = useRouter();
	const [screenWidth, setScreenWidth] = useState(window.screen.width);

	useEffect(() => {
		if (screenWidth <= 640) {
			router.push("/discussion-forum");
		} else {
			router.push("/");
		}
	}, [screenWidth]);

	return (
		<div className="mt-14">
			<ul className="flex flex-col gap-4">
				{USER_DETAILS.map((user, index) => (
					<UserPostCard
						key={index}
						profilePicture={user.profilePicture}
						name={user.name}
						sector={user.sector}
						description={user.description}
						likes={user.likes}
						views={user.views}
						comments={user.comments}
						lastSeen={user.lastSeen}
					/>
				))}
			</ul>
		</div>
	);
};

export default page;
