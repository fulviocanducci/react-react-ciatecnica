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
import {
  useGetUserById,
  useSaveAdd,
  useSaveEdit,
} from '../../contexts/UserContext/index';
import EditUserRegister from './EditUserRegister';
import EditUserProfile from './EditUserProfile';

function Edit() {
  let history = useHistory();
  let { id } = useParams();
  const [data, setData] = useState({ ...useGetUserById(id) });
  const [operation] = useState(history.location.pathname === '/user/add');
  const changeDataEdit = useSaveEdit();
  const changeDataAdd = useSaveAdd();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (operation) {
      changeDataAdd(data);
    } else {
      changeDataEdit(data);
    }
    setTimeout(() => history.push('/users'), 1000);
  };

  const onChangeData = (e) => {
    let { name, value } = e.target;
    if (name === 'status') {
      value = value === 'true';
    }
    setData((state) => ({ ...state, [name]: value }));
  };

  return (
    <div className="mt-3">
      <CForm
        className="form-horizontal mt-3"
        onSubmit={onHandleSubmit}
        method="post"
      >
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
            <CButton type="submit" title="Save" className="btn btn-success">
              {operation ? 'Insert' : 'Save'}
            </CButton>
          </div>
        </CContainer>
      </CForm>
    </div>
  );
}

export default Edit;
