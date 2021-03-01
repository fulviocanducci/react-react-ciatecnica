import React, { useState } from 'react';

import { CButton, CCol, CContainer, CRow } from '@coreui/react';
import { useHistory } from 'react-router-dom';

import { useChangeStatusUser, useUsers } from '../../contexts/UserContext';

function Users() {
  let history = useHistory();
  const [status, setStatus] = useState('all');
  const [text, setText] = useState('');
  const users = useUsers(status, text);
  const changeStatusUser = useChangeStatusUser();
  const handleEdit = (id) => {
    history.push(`/user/edit/${id}`);
  };
  const handleAdd = (id) => {
    history.push(`/user/add`);
  };
  return (
    <CContainer>
      <h3>Users</h3>
      <hr />
      <div>
        <CRow>
          <CCol lg="5" className="py-3">
            <CButton
              type="button"
              className="btn btn-primary"
              onClick={handleAdd}
            >
              Add
            </CButton>
          </CCol>
          <CCol md="4" className="py-3">
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="form-control"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </CCol>
          <CCol sm="3" className="py-3">
            <input
              type="search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </CCol>
        </CRow>
      </div>
      <div>
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">User Name</th>
              <th className="text-center">Profile</th>
              <th className="text-center">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.firstName + ' ' + u.lastName}</td>
                <td>{u.userName}</td>
                <td>{u.profile[0].toUpperCase() + u.profile.substring(1)}</td>
                <td className="text-center">
                  {u.status ? 'Active' : 'Inactive'}
                </td>
                <td style={{ width: '160px' }} className="align-middle">
                  <button
                    className="btn btn-success"
                    onClick={(e) => handleEdit(u.id)}
                  >
                    Edit
                  </button>{' '}
                  <button
                    className="btn btn-danger"
                    onClick={(e) => changeStatusUser(u.id)}
                    disabled={!u.status}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CContainer>
  );
}

export default Users;
