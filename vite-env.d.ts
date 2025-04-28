/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // Add other environment variables here if needed
    }
    
interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module "*.wav" {
    const src: string;
    export default src;
  }
  
  declare module '*.png' {
    const value: string;
    export default value;
  }
  