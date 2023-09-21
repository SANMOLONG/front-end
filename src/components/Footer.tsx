import React from "react";
import { homeSvg, togeterSvg, userSvg } from "../asset";
import * as SC from "../components";
import { useNavigate } from "react-router-dom";

type IconName = "home" | "together" | "user";

export const Footer = () => {
	const navigate = useNavigate();

	const iconLinks = {
		home: "/home",
		together: "/joinboard",
		user: "/userprofile",
	};

	const handleIconClick = (iconName: IconName) => {
		const link = iconLinks[iconName];
		if (link) {
			navigate(link);
		}
	};

	return (
		<SC.NavBottom $jc='space-around'>
			<SC.NavIcon onClick={() => handleIconClick("home")} children={<img src={homeSvg} alt='NavbottomImg' />} />
			<SC.NavIcon
				onClick={() => handleIconClick("together")}
				children={<img src={togeterSvg} alt='NavbottomImg' />}
			/>
			<SC.NavIcon onClick={() => handleIconClick("user")} children={<img src={userSvg} alt='NavbottomImg' />} />
		</SC.NavBottom>
	);
};
