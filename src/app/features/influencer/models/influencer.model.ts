export interface Influencer {
  id: string;
  name: string;
  profilePic: string;
  instagram: string;
  twitter: string;
  about: string;
  title: string;
  location: string;
  email: string;
  phone: string;
}

export class Influencer {
  constructor(obj: Influencer) {
    Object.keys(obj).forEach((key) => (this[key] = obj[key]));
  }
}
