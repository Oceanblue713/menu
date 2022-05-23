import { createTheme } from "@material-ui/core/styles";

export default function theme() {
  createTheme({
    palette: {
      primary: {
        light: "#76ffff",
        main: "#18ffff",
        dark: "#00cbcc",
      },
      secondary: {
        light: "#757de8",
        main: "#3f51b5",
        dark: "#002984",
      },
    },
  });
}
