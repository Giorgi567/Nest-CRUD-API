import { rawData } from 'src/data-interfaces/fetched.data.interface';
import { IcreateUser } from 'src/data-interfaces/post.user.interface';
import { IupdateUser } from 'src/data-interfaces/put.user.interface';

export class usersRepository {
  async getUsers() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: rawData[] = await response.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async getUser(id: number) {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const dataa: rawData[] = await data.json();

      const filterdData = dataa.filter(
        (user) => String(user.id) === String(id),
      );
      return filterdData;
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(body: IcreateUser) {
    return body;
  }

  async updateUser(id: number, Body: IupdateUser) {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!data.ok) {
        throw new Error('Network response was not ok');
      }

      const dataa: rawData[] = await data.json();

      const filterdData = dataa.filter(
        (user) => String(user.id) === String(id),
      );

      if (!filterdData[0]) {
        return `User with id of "${id}" does not exists`;
      }

      if (Body.name && Body.username) {
        filterdData[0].name = Body.name;
        filterdData[0].username = Body.username;
        return filterdData;
      }

      if (Body.name) {
        filterdData[0].name = Body.name;
        return filterdData;
      }

      if (Body.username) {
        filterdData[0].username = Body.username;
        return filterdData;
      }

      return 'You can not update anything but name and username';
      //implemented update like this because i dont use database for this mini nest project
    } catch (err) {
      console.log(err);
    }
  }

  async deleteUser(id: number) {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!data.ok) {
        throw new Error('Network response was not ok');
      }

      const dataa: rawData[] = await data.json();

      const filterdData = dataa.filter(
        (user) => String(user.id) === String(id),
      );

      if (!filterdData) {
        throw new Error(`User with id of ${id} does not exists`);
      }

      return 'Data Deleted';
    } catch (err) {
      console.log(err);
    }
  }
}
