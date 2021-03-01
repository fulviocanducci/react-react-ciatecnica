import React from 'react';

import DivInput from '../DivInput';

function EditUserProfile({ data, onChange }) {
  return (
    <div className="mt-3">
      <DivInput
        name="userName1"
        label="User Name"
        value={data.userName}
        disabled={true}
      />
      <DivInput
        name="firstName1"
        label="First Name"
        value={data.firstName}
        disabled={true}
      />
      <DivInput
        name="lastName1"
        label="Last Name"
        value={data.lastName}
        disabled={true}
      />
      <div className="row form-group">
        <div className="col-md-3 text-right">
          <label htmlFor={'profile'}>Profile:</label>
        </div>
        <div className="col-12 col-md-3">
          <select
            className="form-control"
            onChange={onChange}
            name="profile"
            id="profile"
            value={data.profile}
          >
            <option value="driver">Driver</option>
            <option value="office">Office</option>
          </select>
        </div>
        <div className="col-md-3 text-right">
          <label htmlFor={'company'}>Company:</label>
        </div>
        <div className="col-12 col-md-3">
          <select
            onChange={onChange}
            className="form-control"
            name="company"
            id="company"
            value={data.company}
          >
            <option value="company1">Company 1</option>
            <option value="company2">Company 2</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default EditUserProfile;
