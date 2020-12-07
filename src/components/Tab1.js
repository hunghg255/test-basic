import React from 'react';

export default function Tab1({
  data,
  handleTemplate,
  handleChangeInputTab1,
  handleAddTab,
  handleActiveTabs,
}) {
  const { tab1ActiveIdx, tabs } = data;

  const displayTemplate = (template, data) => {
    switch (template) {
      case 'template1':
        return (
          <>
            <div>
              <div>Email</div>
              <input
                type='text'
                value={data.email.value}
                onChange={(e) =>
                  handleChangeInputTab1(template, tab1ActiveIdx, e, 'email')
                }
              />
              {data.email.submit && (
                <span style={{ color: '#f00' }}>ERROR</span>
              )}
            </div>
            <div>
              <div>Age</div>
              <input
                type='text'
                value={data.age.value}
                onChange={(e) =>
                  handleChangeInputTab1(template, tab1ActiveIdx, e, 'age')
                }
              />
            </div>
            <div>
              <div>Gender</div>
              <input
                type='text'
                value={data.gender.value}
                onChange={(e) =>
                  handleChangeInputTab1(template, tab1ActiveIdx, e, 'gender')
                }
              />
            </div>
          </>
        );
      case 'template2':
        return (
          <>
            <div>
              <div>Id</div>
              <input
                type='text'
                value={data.id.value}
                onChange={(e) =>
                  handleChangeInputTab1(template, tab1ActiveIdx, e, 'id')
                }
              />
              {data.id.submit && <span style={{ color: '#f00' }}>ERROR</span>}
            </div>
            <div>
              <div>Username</div>
              <input
                type='text'
                value={data.username.value}
                onChange={(e) =>
                  handleChangeInputTab1(template, tab1ActiveIdx, e, 'username')
                }
              />
              {data.username.submit && (
                <span style={{ color: '#f00' }}>ERROR</span>
              )}
            </div>
            <div>
              <div>Password</div>
              <input
                type='text'
                value={data.password.value}
                onChange={(e) =>
                  handleChangeInputTab1(template, tab1ActiveIdx, e, 'password')
                }
              />
            </div>
          </>
        );
      default:
        return <></>;
        break;
    }
  };

  return (
    <div>
      {tabs.map((item, idx) => {
        return (
          <button
            style={{ color: idx === tab1ActiveIdx ? '#f00' : '#000' }}
            key={idx}
            onClick={() => handleActiveTabs(idx)}
          >
            View{idx}
          </button>
        );
      })}
      <button onClick={() => handleAddTab()}>+</button>
      <br />
      <div>
        Template:
        <select
          id={`select-tab-${tab1ActiveIdx}`}
          onChange={(e) => handleTemplate(e.target.value, tab1ActiveIdx)}
          value={tabs[tab1ActiveIdx].templateActive}
        >
          {Object.keys(tabs[tab1ActiveIdx].template).map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        {!data.isLastValid && <span style={{ color: '#f00' }}>ERROR</span>}
      </div>
      <div>
        {displayTemplate(
          tabs[tab1ActiveIdx].templateActive,
          tabs[tab1ActiveIdx].template[tabs[tab1ActiveIdx].templateActive]
        )}
      </div>
    </div>
  );
}
