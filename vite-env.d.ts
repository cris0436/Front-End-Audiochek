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
declare module '*.jpg' {
    const value: string;
    export default value;
  }
declare module '*.jpeg' {
    const value: string;
    export default value;
  }
declare module '*.svg' {
    const value: string;
    export default value;
  }
declare module '*.mp3' {
    const value: string;
    export default value;
  }

  
  