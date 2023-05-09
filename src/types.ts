export type ScreenSize = "mobile" | "tablet" | "desktop";
export type Section = "overview" | "structure" | "geology";

export type Data = {
  name: string;
  size: {
    [key in ScreenSize]: {
      height: number;
      width: number;
    };
  };
  section: {
    [key in Section]: {
      content: string;
      source: string;
    };
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
};

export type Planet =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "saturn"
  | "jupiter"
  | "neptune"
  | "uranus";

export type RouterQuery = {
  planet?: Planet;
};
