export type Tag = {
  id: number;
  name: string;
};

export type Poll = {
  id: number;
  name: string;
  qrCode: string;
  humanReadableLink: string;
  tags: Tag[];
};
