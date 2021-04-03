import { Poll, Tag } from "./poll";

export type OwnerWithShops = {
  email: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName?: string;
  phone: string;
  shops: Shop[];
  telegramChatId: number;
};
export type Shop = {
  name: string;
  description: string;
  logo: string;
  address: string;
  polls: Poll[];
};

export type NewReview = {
  rating: number;
  comment: string;
  phone: string;
  photos: string[];
  tags: Poll["tags"];
  audio: string;
  pollid: number;
};

export type ReturnedPoll = {
  id: number;
  name: string;
  qrCode: string;
  humanReadableLink: string;
  tags: Tag[];
  shopId: number;
  shop: {
    id: number;
    name: string;
    description: string;
    address: string;
    userId: number;
  };
};
