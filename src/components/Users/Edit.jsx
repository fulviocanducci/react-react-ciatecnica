import React, { useState } from 'react';
import {
  CButton,
  CContainer,
  CForm,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
} from '@coreui/react';
import { useHistory, useParams } from 'react-router-dom';
import { useGetUserById } from '../../contexts/UserContext/index';
import EditUserRegister from './EditUserRegister';
import EditUserProfile from './EditUserProfile';

function Edit() {
  let history = useHistory();
  let { id } = useParams();
  const [data, setData] = useState({ ...useGetUserById(id) });
  const onHandleSubmit = (e) => {
    console.log(1);
    e.preventDefault();
    console.log(data);
  };
  const onChangeData = (e) => {
    const { name, value } = e.target;
    setData((state) => ({ ...state, [name]: value }));
  };
  return (
    <div className="mt-3">
      {JSON.stringify(data)}
      <CForm className="form-horizontal mt-3" onSubmit={onHandleSubmit}>
        <CContainer>
          <CTabs activeTab="home">
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink data-tab="home">User Register</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="profile">Profile</CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane data-tab="home">
                <EditUserRegister data={data} onChange={onChangeData} />
              </CTabPane>
              <CTabPane data-tab="profile">
                <EditUserProfile data={data} onChange={onChangeData} />
              </CTabPane>
            </CTabContent>
          </CTabs>
          <div className="mt-3 mb-5 text-right">
            <CButton
              title="Cancel"
              className="btn btn-danger"
              onClick={(e) => history.push('/users')}
            >
              Cancel
            </CButton>{' '}
            <CButton title="Save" className="btn btn-success">
              Save
            </CButton>
          </div>
        </CContainer>
      </CForm>
    </div>
  );
}

export default Edit;
