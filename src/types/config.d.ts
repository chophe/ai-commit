// Define the type for your config
export type Config = {
  openAI: {
    apiKey: string;
    baseUrl: string;
  };
  commit: {
    language: string;
    maxCharacter: number;
  };
};

declare const config: Config;
export default config;
