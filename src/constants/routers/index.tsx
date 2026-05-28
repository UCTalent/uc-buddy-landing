import { BASE_URL } from "@/constants/url";

export type navType = {
  id: string;
  text: string;
  path: string;
  createPath: () => string;
  isShow: boolean;
  isPrivate: boolean;
};

export const nav_items: navType[] = [
  {
    id: "features",
    text: "Features",
    path: BASE_URL.HOME,
    createPath: () => `${BASE_URL.HOME}`,
    isShow: true,
    isPrivate: false,
  },
  {
    id: "faq",
    text: "FAQ",
    path: BASE_URL.HOME,
    createPath: () => `${BASE_URL.HOME}`,
    isShow: true,
    isPrivate: false,
  },
  {
    id: "contact",
    text: "Contact",
    path: BASE_URL.HOME,
    createPath: () => `${BASE_URL.HOME}`,
    isShow: true,
    isPrivate: false,
  },
  {
    id: "download",
    text: "Download App",
    path: BASE_URL.HOME,
    createPath: () => `${BASE_URL.HOME}`,
    isShow: true,
    isPrivate: false,
  },
];
