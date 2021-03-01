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

export const useUsers = (source = 'all', text = '') => {
  const { users } = useContext(UserContextContext);
  if (source === 'all') {
    return text === '' ? users : users.filter((x) => x.userName.includes(text));
  }
  if (source === 'active') {
    return text === ''
      ? users.filter((x) => x.status)
      : users.filter((x) => x.status && x.userName.includes(text));
  }
  if (source === 'inactive') {
    return text === ''
      ? users.filter((x) => !x.status)
      : users.filter((x) => !x.status && x.userName.includes(text));
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
  return {
    id: users.length + 1,
    firstName: '',
    lastName: '',
    userName: '',
    profile: 'driver',
    status: true,
    email: '',
    phone: '',
    celular: '',
    password: '',
    confirmPassword: '',
    company: 'company1',
    expire: 'no',
    dateExpire: '',
  };
};

export const useSaveEdit = () => {
  const { setUsers } = useContext(UserContextContext);
  return (data) => {
    setUsers((state) => {
      return state.map((x) => {
        return x.id === data.id ? data : x;
      });
    });
  };
};

export const useSaveAdd = () => {
  const { setUsers } = useContext(UserContextContext);
  return (data) => {
    setUsers((state) => [...state, data]);
  };
};

export default UserContextProvider;
