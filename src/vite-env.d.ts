/// <reference types="vite/client" />

declare module "*.asset.json" {
  const value: {
    url: string;
    original_filename?: string;
  };
  export default value;
}
