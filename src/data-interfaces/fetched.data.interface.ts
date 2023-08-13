import { IGeo } from './put.user.interface';

export interface Iaddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface rawData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Iaddress;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
