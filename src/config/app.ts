export const APP = {
  name: "Lumofy",

  shortName: "Lumofy",

  version: "1.0.0",

  isDevelopment:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development",

  isProduction: process.env.NODE_ENV === "production",

  design: {
    dummyImage: "https://picsum.photos/200",
  },
} as const;
