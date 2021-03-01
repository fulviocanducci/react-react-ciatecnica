import React from 'react';
import {
  CContainer,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
} from '@coreui/react';
import { useParams } from 'react-router-dom';
import { useGetUserById } from '../../contexts/UserContext/index';
import EditUserRegister from './EditUserRegister';
import EditUserProfile from './EditUserProfile';

function Edit() {
  let { id } = useParams();
  const user = useGetUserById(id);
  return (
    <div className="mt-3">
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
              <EditUserRegister data={user} />
            </CTabPane>
            <CTabPane data-tab="profile">
              <EditUserProfile data={user} />
            </CTabPane>
          </CTabContent>
        </CTabs>
      </CContainer>
    </div>
  );
}

export default Edit;
