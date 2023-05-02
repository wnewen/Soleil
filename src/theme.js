import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgBase: "#433F3B",
    colorTextBase: "#C8D7EB",
    colorBorder: "#C8D7EB",
    colorBgFooter: "#433F3B",
    colorTextFooter: "#C8D7EB",
  },
  components: {
    Button: {
      
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgBase: "#F5F5F5",
    colorTextBase: "#412613",
    colorBorder: "##412613",
    colorBgFooter: "#F5F5F5",
    colorTextFooter: "#412613",
    
  },
  components: {
    Button: {

    },
  },
};

export { lightTheme, darkTheme };