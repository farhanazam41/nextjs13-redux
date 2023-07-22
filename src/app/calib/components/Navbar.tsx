import React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

interface NavbarProps {
    onHandleToggleDashboard: (board:string) => void
}
function Navbar({onHandleToggleDashboard} : NavbarProps) {
	const dashboards = ["dashboard1", "dashboard2", "dashboard3"];
	return (
		<List>
			{dashboards.map((dashbaord, index) => {
				return (
					<ListItemButton key={index} onClick={() => onHandleToggleDashboard(dashbaord)}>
						<ListItemText>{dashbaord}</ListItemText>
					</ListItemButton>
				);
			})}
		</List>
	);
}

export default Navbar;
