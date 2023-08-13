export interface IGeo {
  lat: string;
  lng: string;
}

export interface IupdateUser {
  name?: string;
  username?: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
