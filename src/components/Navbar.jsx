import React from "react";
import UserDropdown from "./Dropdown";
import logo from "../assets/hobiku.png";

export default function Navbar() {
	return (
		<nav className="shadow-md mb-2 bg-white">
			<div className="flex justify-between mx-8 md:mx-10 lg:mx-28 xl:mx-32">
				<h4 className="my-auto font-bold text-2xl text-teal-500 text">
					<a href="/" id="navigate-home">
						<img
							src={logo}
							alt="Hobiku"
							className=""
							width={130}
							height={40}
						/>
					</a>
				</h4>
				<UserDropdown />
			</div>
		</nav>
	);
}
