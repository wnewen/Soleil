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
      colorTextButton: "#412613",
      colorPrimary: "#8592A2",
      colorPrimaryHover: "#000000",
      colorPrimaryActive: "#030202",
      colorPrimaryBorder: "#EFEDE9",
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
      colorPrimary: "#29231F",
      colorPrimaryHover: "#000000",
      colorPrimaryActive: "#030202",
      
    },
  },
};

export { lightTheme, darkTheme };