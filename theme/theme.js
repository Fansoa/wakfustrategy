import { global } from "./global";

import { boxTheme } from "./componentsTheme/boxTheme";

const componentsTheme = {
  boxTheme,
}

const theme = {
  ...global,
  ...componentsTheme,
}

export default theme;
