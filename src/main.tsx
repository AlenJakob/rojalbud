import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import { blue } from "@mui/material/colors";

const theme = createTheme({
	spacing: 8,
	typography: {
		fontFamily: '"Lato", serif',
	},
	palette: {
		primary: {
			light: blue[300],
			main: blue[500],
			dark: blue[900],
		},
		secondary: {
			main: "#dc004e", // Kolor dodatkowy
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderColor: "#92cfff",
					color: "#92cfff",
					textTransform: "inherit",
					letterSpacing: 1,
				},
			},
		},
	},
});
const router = createHashRouter([
	{
		path: "/*",
		element: <App />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>
);
