import { CButton, CCol, CContainer, CNavLink, CRow } from '@coreui/react';
import React, { useState } from 'react';
import { useChangeStatusUser, useUsers } from '../../contexts/UserContext';

function Users() {
  const [status, setStatus] = useState('all');
  const users = useUsers(status);
  const changeStatusUser = useChangeStatusUser();
  return (
    <CContainer>
      <h1>Lista de Usuarios</h1>
      <div>
        <CRow>
          <CCol lg="5" className=" py-3">
            <button type="button" class="btn btn-primary">
              Add
            </button>
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
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </CCol>
        </CRow>
      </div>
      <div>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Profile</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.userName}</td>
              <td>{u.profile}</td>
              <td>{u.status ? 'Active' : 'Inactive'}</td>
              <td>
                <CNavLink className="btn btn-success" to={`/user/${u.id}`}>
                  Edit
                </CNavLink>{' '}
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
        </table>
      </div>
    </CContainer>
  );
}

export default Users;
