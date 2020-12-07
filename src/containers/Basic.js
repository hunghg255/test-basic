import React, { Component } from 'react';

import Tab0 from '../components/Tab0';
import Tab1 from '../components/Tab1';

export default class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActiveIdx: '0',
      dataTab0: {
        name: {
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          submit: false,
        },
        title: {
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          submit: false,
        },
      },
      dataTab1: {
        tab1ActiveIdx: 0,
        isLastValid: true,
        tabs: [
          {
            templateActive: 'none',
            template: {
              none: '',
              template1: {
                email: {
                  value: '',
                  validation: {
                    required: true,
                  },
                  valid: false,
                  submit: false,
                },
                age: {
                  value: '',
                  validation: {
                    required: false,
                  },
                  valid: false,
                  submit: false,
                },
                gender: {
                  value: '',
                  validation: {
                    required: false,
                  },
                  valid: false,
                  submit: false,
                },
              },
              template2: {
                id: {
                  value: '',
                  validation: {
                    required: true,
                  },
                  valid: false,
                  submit: false,
                },
                username: {
                  value: '',
                  validation: {
                    required: true,
                  },
                  valid: false,
                  submit: false,
                },
                password: {
                  value: '',
                  validation: {
                    required: false,
                  },
                  valid: false,
                  submit: false,
                },
              },
            },
          },
        ],
      },
      tab1: {
        templateActive: 'none',
        template: {
          none: '',
          template1: {
            email: {
              value: '',
              validation: {
                required: true,
              },
              valid: false,
              submit: false,
            },
            age: {
              value: '',
              validation: {
                required: false,
              },
              valid: false,
              submit: false,
            },
            gender: {
              value: '',
              validation: {
                required: false,
              },
              valid: false,
              submit: false,
            },
          },
          template2: {
            id: {
              value: '',
              validation: {
                required: true,
              },
              valid: false,
              submit: false,
            },
            username: {
              value: '',
              validation: {
                required: true,
              },
              valid: false,
              submit: false,
            },
            password: {
              value: '',
              validation: {
                required: false,
              },
              valid: false,
              submit: false,
            },
          },
        },
      },
    };
  }

  // submit
  handleSubmit() {
    const { dataTab0, dataTab1 } = this.state;
    // tab0
    dataTab0.name.submit = !dataTab0.name.valid;
    dataTab0.title.submit = !dataTab0.title.valid;
    let isValid = true;

    const isValidTab1 = dataTab0.name.valid && dataTab0.title.valid;
    let isValidTab2 = true;

    // tab1
    const tabCheck = dataTab1.tabs[dataTab1.tabs.length - 1];
    const result = this.checkValid(tabCheck, dataTab1);
    isValidTab2 = result.isValid;
    this.setState({
      dataTab1: {
        ...result.dataTab1,
        isLastValid: result.isLastValid,
      },
    });

    isValid = isValidTab1 && isValidTab2;

    // alert
    if (isValid) {
      alert('Thành công');
    } else {
      alert('Vui lòng điền đủ thông tin');
    }
    this.setState({ dataTab0: dataTab0 });
  }

  // change tab
  handleTabActive(tabIdx) {
    this.setState({ tabActiveIdx: tabIdx });
  }

  // Tab0
  handleChangeInput(evt, propsName) {
    const newDataTab0 = {
      ...this.state.dataTab0,
      [propsName]: {
        ...this.state.dataTab0[propsName],
        value: evt.target.value,
        valid:
          !!evt.target.value &&
          this.state.dataTab0[propsName].validation.required,
      },
    };
    this.setState({ dataTab0: newDataTab0 });
  }

  // tab1
  handleSelectTemplate(tem, tab1ActiveIdx) {
    const dataTab1 = JSON.parse(JSON.stringify(this.state.dataTab1));
    dataTab1.tabs[tab1ActiveIdx].templateActive = tem;
    this.setState({ dataTab1: { ...dataTab1, isLastValid: true } });
  }

  handleChangeInputTab1(tem, tab1ActiveIdx, evt, propsName) {
    const dataTab1 = JSON.parse(JSON.stringify(this.state.dataTab1));

    dataTab1.tabs[tab1ActiveIdx].template[tem] = {
      ...dataTab1.tabs[tab1ActiveIdx].template[tem],
      [propsName]: {
        ...dataTab1.tabs[tab1ActiveIdx].template[tem][propsName],
        value: evt.target.value,
        valid:
          !!evt.target.value &&
          dataTab1.tabs[tab1ActiveIdx].template[tem][propsName].validation
            .required,
      },
    };
    this.setState({ dataTab1: dataTab1 });
  }

  checkValid(tabCheck, dataTab1) {
    switch (tabCheck.templateActive) {
      case 'template1':
        dataTab1.tabs[dataTab1.tabs.length - 1].template[
          tabCheck.templateActive
        ].email.submit = !dataTab1.tabs[dataTab1.tabs.length - 1].template[
          tabCheck.templateActive
        ].email.valid;

        return {
          dataTab1,
          isValid:
            dataTab1.tabs[dataTab1.tabs.length - 1].template[
              tabCheck.templateActive
            ].email.valid,
          isLastValid: true,
        };
        break;
      case 'template2':
        dataTab1.tabs[dataTab1.tabs.length - 1].template[
          tabCheck.templateActive
        ].id.submit = !dataTab1.tabs[dataTab1.tabs.length - 1].template[
          tabCheck.templateActive
        ].id.valid;
        dataTab1.tabs[dataTab1.tabs.length - 1].template[
          tabCheck.templateActive
        ].username.submit = !dataTab1.tabs[dataTab1.tabs.length - 1].template[
          tabCheck.templateActive
        ].username.valid;

        return {
          dataTab1,
          isValid:
            dataTab1.tabs[dataTab1.tabs.length - 1].template[
              tabCheck.templateActive
            ].id.valid &&
            dataTab1.tabs[dataTab1.tabs.length - 1].template[
              tabCheck.templateActive
            ].username.valid,
          isLastValid: true,
        };
        break;
      default:
        return {
          dataTab1,
          isValid: false,
          isLastValid: false,
        };
        break;
    }
  }

  handleAddTab() {
    const dataTab1 = JSON.parse(JSON.stringify(this.state.dataTab1));
    const tabCheck = dataTab1.tabs[dataTab1.tabs.length - 1];
    let isValid = true;

    const result = this.checkValid(tabCheck, dataTab1);
    isValid = result.isValid;
    this.setState({
      dataTab1: {
        ...result.dataTab1,
        isLastValid: result.isLastValid,
      },
    });

    if (!isValid) return;
    dataTab1.tabs.push(this.state.tab1);
    dataTab1.tab1ActiveIdx = dataTab1.tabs.length - 1;
    this.setState({ dataTab1: dataTab1 });
  }

  handleActiveTabs(id) {
    const dataTab1 = JSON.parse(JSON.stringify(this.state.dataTab1));
    dataTab1.tab1ActiveIdx = id;
    this.setState({ dataTab1: dataTab1 });
  }

  render() {
    const { tabActiveIdx, dataTab0, dataTab1 } = this.state;

    return (
      <div>
        <button onClick={() => this.handleSubmit()}>Submit</button>
        <hr />
        <div
          style={{
            marginBottom: '30px',
          }}
        >
          <button
            style={{
              color: tabActiveIdx === '0' ? '#f00' : '#000',
            }}
            onClick={() => this.handleTabActive('0')}
          >
            0
          </button>
          <button
            style={{
              color: tabActiveIdx === '1' ? '#f00' : '#000',
            }}
            onClick={() => this.handleTabActive('1')}
          >
            1
          </button>
        </div>

        {tabActiveIdx === '0' ? (
          <Tab0
            data={dataTab0}
            handleChange={(event, propsName) =>
              this.handleChangeInput(event, propsName)
            }
          />
        ) : (
          <Tab1
            data={dataTab1}
            handleTemplate={(tem, tab1ActiveIdx) =>
              this.handleSelectTemplate(tem, tab1ActiveIdx)
            }
            handleChangeInputTab1={(tem, tab1ActiveIdx, e, propsName) =>
              this.handleChangeInputTab1(tem, tab1ActiveIdx, e, propsName)
            }
            handleAddTab={() => this.handleAddTab()}
            handleActiveTabs={(id) => this.handleActiveTabs(id)}
          />
        )}
      </div>
    );
  }
}
