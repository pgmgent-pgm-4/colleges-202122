import { faker } from '@faker-js/faker';

import client from './graphql_client';

const mutationCreateAuthUser = `
mutation CreateAuthUserMutation($username: String!, $email: String!, $password: String!) {
  __typename
  createAuthUser(data: {username: $username, email: $email, password: $password}) {
    id
    email
    username
  }
}
`;

(async () => {
  const createUser = async ({username, email, password, firstname, lastname}) => {
    try {
      const { createAuthUser } = await client.request(mutationCreateAuthUser, {username, email, password});

      if (!createAuthUser) {
        throw new Error(`Can't create user!`)
      }

    } catch(error) {
      console.log(error)
    }
  };

  const createUsers = async (n = 20) => {
    const promises = [];
    for (let i = 0; i < n;i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      promises.push(await createUser({firstname: firstName, lastname: lastName, username: faker.internet.userName(firstName, lastName), email: faker.internet.email(firstName, lastName), password: 'w84me2u'}));
    }
    return await Promise.all(promises);
  };

  await createUsers();
})();