import React, { createContext, useContext, useState } from 'react';

const UserContextContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'teste 1',
      userName: 'u1',
      profile: 'us1',
      status: true,
      email: 'u1@test.com',
      phone: '111',
      celular: '111',
      password: '123',
    },
    {
      id: 2,
      name: 'teste 2',
      userName: 'u2',
      profile: 'us1',
      status: true,
      email: 'u2@test.com',
      phone: '222',
      celular: '222',
      password: '456',
    },
    {
      id: 3,
      name: 'teste 3',
      userName: 'u3',
      profile: 'us1',
      status: true,
      email: 'u3@test.com',
      phone: '333',
      celular: '333',
      password: '789',
    },
    {
      id: 4,
      name: 'teste 4',
      userName: 'u4',
      profile: 'us1',
      status: true,
      email: 'u4@test.com',
      phone: '444',
      celular: '444',
      password: '101',
    },
  ]);
  return (
    <UserContextContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContextContext.Provider>
  );
};

export const useUsers = (source = 'all') => {
  const { users } = useContext(UserContextContext);
  if (source === 'all') {
    return users;
  }
  if (source === 'active') {
    return users.filter((x) => x.status);
  }
  if (source === 'inactive') {
    return users.filter((x) => !x.status);
  }
};

export const useChangeStatusUser = () => {
  const { users, setUsers } = useContext(UserContextContext);
  return (id) => {
    console.log(id);
    setUsers((state) => {
      return users.map((x) => {
        if (x.id === id) {
          x.status = false;
        }
        return x;
      });
    });
  };
};

export const useGetUserById = (id) => {
  const { users } = useContext(UserContextContext);
  const data = users.filter((x) => x.id === +id);
  if (data && data.length === 1) return data[0];
  return null;
};

export default UserContextProvider;
