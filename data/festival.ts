export const categories = ["music", "quizzes", "drama", "dance", "photography", "misc"] as const;

export type FestivalEvent = {
  id: number;
  name: string;
  about: string;
  club: string;
  categories: string[];
  img_url: string;
};

export type FestivalPartner = {
  id: number;
  name: string;
  description: string;
  order: number;
  url: string;
  web_url: string;
  icon: string;
  link: string;
  publication: boolean;
};

// No event or partner API records were committed to the original repository.
export const eventRecords: FestivalEvent[] = [];
export const partnerRecords: FestivalPartner[] = [];
