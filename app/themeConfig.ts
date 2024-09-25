import type { ThemeConfig } from "antd";

const antLightTheme: ThemeConfig = {
  token: {
    fontSize: 14,
    colorPrimary: "rgb(15 23 42)",
  },


};


const antDarkTheme: ThemeConfig = {
  token: {
    fontSize: 14,
    colorPrimary: "rgb(226 232 240)",
    colorBgContainer: "rgb(15 23 42)",
    colorBgElevated:"rgb(15 23 42)",
    colorText: "white",
  },
  
  components: {
    Form: {
      labelColor: "white",
    },
    DatePicker: {
      // cellActiveWithRangeBg: "rgb(100 100 100)",
      activeBorderColor:"rgb(226 232 240)",
      cellHoverBg: "rgb(100 100 100)",
    }
  },
};

export {
  antLightTheme,
  antDarkTheme
};
