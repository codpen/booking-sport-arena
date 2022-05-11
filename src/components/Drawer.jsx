// Responsive Drawer
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import StadiumIcon from "@mui/icons-material/Stadium";
import LogoutIcon from "@mui/icons-material/Logout";
import { teal, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export function ResponsiveDrawer(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const navigate = useNavigate();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar className="flex justify-center">
				<Typography
					variant="h5"
					className="uppercase font-bold hidden md:block text-center"
					noWrap
					id="homepage-logo"
					onClick={() => navigate("/")}
					component="button">
					Hobiku
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				{/* listing version */}
				<ListItem
					button
					key="Dashboard"
					id="dashboard-link"
					onClick={() => {
						navigate("/owner");
					}}>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>
				<ListItem
					button
					key="Arena"
					id="arena-section"
					onClick={() => {
						navigate("/owner/create");
					}}>
					<ListItemIcon>
						<StadiumIcon />
					</ListItemIcon>
					<ListItemText primary="Create Arena" />
				</ListItem>
				{/* <ListItem
					button
					key="Arena 1"
					onClick={() => {
						navigate("/owner/:arena_id");
					}}>
					<ListItemIcon>
						<StadiumIcon />
					</ListItemIcon>
					<ListItemText primary="Arena 1" />
				</ListItem> */}
				<ListItem
					button
					key="Transaction"
					id="history-transaction-link"
					onClick={() => {
						navigate("/owner/transaction");
					}}>
					<ListItemIcon>
						<HistoryIcon />
					</ListItemIcon>
					<ListItemText primary="Transaction" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem
					button
					key="Logout"
					id="logout"
					onClick={() => {
						localStorage.removeItem("user-info");
						navigate("/");
					}}>
					<ListItemIcon>
						<LogoutIcon />
					</ListItemIcon>
					<ListItemText primary="Logout" />
				</ListItem>
			</List>
		</div>
	);
	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { md: `calc(100% - ${drawerWidth}px)` },
					ml: { md: `${drawerWidth}px` },
					backgroundColor: grey[50],
					color: teal[500],
				}}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { md: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h5"
						className="uppercase font-bold md:hidden block"
						noWrap
						id="homepage-title"
						onClick={() => navigate("/")}
						component="button">
						Hobiku
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{
					width: { md: drawerWidth },
					flexShrink: { md: 0 },
				}}
				aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							backgroundColor: teal[500],
							color: "white",
						},
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", md: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							backgroundColor: teal[500],
							color: "white",
							":hover": {
								"& .MuiListItem-root": {
									"&:hover": {
										backgroundColor: teal[700],
										"& .MuiListItemIcon-root": {
											color: "white",
											"& svg": {
												color: "white",
												"& .MuiSvgIcon-root": {
													color: "white",
												},
											},
										},
									},
								},
							},
						},
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Toolbar />
				{props.children}
			</Box>
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	/** Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};
