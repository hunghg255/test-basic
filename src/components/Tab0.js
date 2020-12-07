import React from 'react';

export default function Tab0({ data, handleChange }) {
  return (
    <>
      <div>
        <div>Name</div>
        <input
          onChange={(e) => handleChange(e, 'name')}
          type='text'
          value={data.name.value}
        />
        {data.name.submit && <span style={{ color: '#f00' }}>ERROR</span>}
      </div>
      <div>
        <div>Title</div>
        <input
          onChange={(e) => handleChange(e, 'title')}
          type='text'
          value={data.title.value}
        />
        {data.title.submit && <span style={{ color: '#f00' }}>ERROR</span>}
      </div>
    </>
  );
}
