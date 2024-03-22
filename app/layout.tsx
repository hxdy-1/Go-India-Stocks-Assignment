// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Go India Stocks Assignment",
	description: "An assignment by Abdul Haadi Momin",
};

// console.log(window.screen.width);

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* <body className={`${inter.className} flex gap-8 p-4`}> */}
			<body className={`${inter.className}`}>
				{children}
				{/* <Sidebar /> */}
				<Topbar />
			</body>
		</html>
	);
}
