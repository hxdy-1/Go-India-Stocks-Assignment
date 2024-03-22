import React from "react";
import ProfilePicture from "../public/60111.jpg";
import UserPostCard from "./UserPostCard";
import { StaticImageData } from "next/image";

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

const DiscussionForum = () => {
	return (
		<div className="w-10/12 flex flex-col gap-2">
			<h1 className="mb-1 w-fit text-3xl uppercase bg-gray-200 text-red-500 font-semibold p-2">
				DISCUSSION FORUM
			</h1>
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

export default DiscussionForum;
