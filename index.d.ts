declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.lottie" {
  const value: string;
  export default value;
}

declare module "*.mp3" {
  const value: any;
  export default value;
}

declare module "*.flac" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.css" {
  const value: { [key: string]: string };
  export = value;
}

declare const process: {
  env: {
    BASE_URL: string;
  };
};
