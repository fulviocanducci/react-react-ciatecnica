import React from 'react';
import InputMask from 'react-input-mask';

import DivInput from '../DivInput';

function EditUserRegister({ data, onChange }) {
  return (
    <div className="mt-3">
      <DivInput
        name="userName"
        label="User Name"
        value={data.userName}
        onChange={onChange}
      />
      <DivInput
        name="firstName"
        label="First Name"
        value={data.firstName}
        onChange={onChange}
      />
      <DivInput
        name="lastName"
        label="Last Name"
        value={data.lastName}
        onChange={onChange}
      />
      <DivInput
        name="email"
        label="E-mail"
        value={data.email}
        onChange={onChange}
      />

      <div className="row form-group">
        <div className="col-md-3 text-right">
          <label htmlFor={'id-phone'}>Phone: </label>
        </div>
        <div className="col-12 col-md-9">
          <InputMask
            mask="(99)9999-9999"
            name="phone"
            label="Phone"
            id="id-phone"
            value={data.phone}
            onChange={onChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-3 text-right">
          <label htmlFor="id-celular">Celular: </label>
        </div>
        <div className="col-12 col-md-9">
          <InputMask
            mask="(99)99999-9999"
            name="celular"
            id="id-celular"
            label="Celular"
            value={data.celular}
            onChange={onChange}
            className="form-control"
          />
        </div>
      </div>

      <DivInput
        name="password"
        label="Password"
        value={data.password}
        type="password"
        onChange={onChange}
      />
      <DivInput
        name="confirmPassword"
        label="Confirm Password"
        value={data.confirmPassword}
        type="password"
        onChange={onChange}
      />
      <div className="row form-group">
        <div className="col-md-3 text-right">
          <label>Expire:</label>
        </div>
        <div className="col-12 col-md-9">
          <div className="row">
            <div className="col-12 col-md-2">
              <div className="form-check">
                <input
                  name="expire"
                  type="radio"
                  className="form-check-input"
                  value="yes"
                  checked={data.expire === 'yes'}
                  onChange={onChange}
                />
                <label className="form-check-label" htmlFor="expire">
                  Yes
                </label>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="form-check">
                <input
                  name="expire"
                  type="radio"
                  className="form-check-input"
                  value="no"
                  checked={data.expire === 'no'}
                  onChange={onChange}
                />
                <label className="form-check-label" htmlFor="expire">
                  Never
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DivInput
        name="expireDate"
        label="Expire Date"
        value={data.expireDate}
        type="date"
        onChange={onChange}
        disabled={data.expire === 'no'}
      />

      <div className="row form-group">
        <div className="col-md-3 text-right">
          <label htmlFor="status">Status:</label>
        </div>
        <div className="col-12 col-md-5">
          <select
            name="status"
            id="status"
            onChange={onChange}
            value={data.status}
            className="form-control"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default EditUserRegister;
