import React, { memo, useState } from 'react';

function DivInput({ label, value, type = 'text', disabled = false }) {
  return (
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">
        {label}
      </label>
      <input
        type={type}
        class="form-control"
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

function EditUserRegister({ data }) {
  const [expire, setExpire] = useState('no');
  return (
    <div className="mt-3">
      <DivInput label="User Name" value={data.userName} />
      <DivInput label="User Name" value={data.name} />
      <DivInput label="E-mail" value={data.email} />
      <DivInput label="Phone" value={data.phone} />
      <DivInput label="Celular" value={data.celular} />
      <DivInput label="Password" value={null} type="password" />
      <DivInput label="Confirm Password" value={null} type="password" />
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Expire
        </label>
        <input
          type="radio"
          name="expire"
          class="form-control"
          value="yes"
          defaultChecked={expire === 'yes'}
          onChange={(e) => setExpire('yes')}
        />
        <input
          type="radio"
          name="expire"
          class="form-control"
          value="no"
          onChange={(e) => setExpire('no')}
          defaultChecked={expire === 'no'}
        />
      </div>
      <DivInput
        label="Date Expire"
        value={null}
        type="date"
        disabled={expire === 'no'}
      />
    </div>
  );
}

export default memo(EditUserRegister);
