import React, { createContext, useContext, useState } from 'react';

const UserContextContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'Fisrt 1',
      lastName: 'Last 1',
      userName: 'u1',
      profile: 'driver',
      status: true,
      email: 'u1@test.com',
      phone: '(11)1111-1111',
      celular: '(11)11111-1111',
      password: '',
      confirmPassword: '',
      company: 'company1',
      expire: 'no',
      dateExpire: '',
    },
    {
      id: 2,
      firstName: 'First 2',
      lastName: 'Last 2',
      userName: 'u2',
      profile: 'driver',
      status: true,
      email: 'u2@test.com',
      phone: '(11)1111-1111',
      celular: '(11)11111-1111',
      password: '',
      confirmPassword: '',
      company: 'company2',
      expire: 'no',
      dateExpire: '',
    },
    {
      id: 3,
      firstName: 'First 3',
      lastName: 'Last 3',
      userName: 'u3',
      profile: 'driver',
      status: true,
      email: 'u3@test.com',
      phone: '(11)1111-1111',
      celular: '(11)11111-1111',
      password: '',
      confirmPassword: '',
      company: 'company1',
      expire: 'no',
      dateExpire: '',
    },
    {
      id: 4,
      firstName: 'First 4',
      lastName: 'Last 4',
      userName: 'u4',
      profile: 'driver',
      status: true,
      email: 'u4@test.com',
      phone: '(11)1111-1111',
      celular: '(11)11111-1111',
      password: '',
      confirmPassword: '',
      company: 'company2',
      expire: 'no',
      dateExpire: '',
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
