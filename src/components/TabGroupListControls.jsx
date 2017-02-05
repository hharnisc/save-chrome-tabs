import React, { PropTypes } from 'react';
import {
  inputStyle,
  inputErrorStyle,
} from '../styles/input';

const ListControls = ({
  onClickSetSaveSelected,
  onTabGroupNameChange,
  onSaveTabGroupClick,
  saveSelected,
  tabGroupError,
  tabGroupName,
}) =>
  <div>
    <label htmlFor={'input-tab-group-name'}>New Tab Group Name</label>
    <input
      id="input-tab-group-name"
      onChange={onTabGroupNameChange}
      placeholder={'Work'}
      value={tabGroupName}
      style={tabGroupError ? inputErrorStyle : inputStyle}
    />
    <button
      onClick={() => onSaveTabGroupClick({ tabGroupName, saveSelected, close: false })}
    >
      Save { saveSelected ? 'Selected' : 'All' } Tabs
    </button>
    <button
      onClick={() => onSaveTabGroupClick({ tabGroupName, saveSelected, close: true })}
    >
      Save & Close { saveSelected ? 'Selected' : 'All' } Tabs
    </button>
    <label htmlFor="cb-save-selected-tabs">
      <input
        type="checkbox"
        id="cb-save-selected-tabs"
        checked={saveSelected}
        onClick={() => onClickSetSaveSelected(!saveSelected)}
        readOnly
      /> Only Save Selected Tabs
    </label>
  </div>;

ListControls.propTypes = {
  onTabGroupNameChange: PropTypes.func,
  onClickSetSaveSelected: PropTypes.func.isRequired,
  onSaveTabGroupClick: PropTypes.func,
  saveSelected: PropTypes.bool.isRequired,
  tabGroupError: PropTypes.bool,
  tabGroupName: PropTypes.string,
};

export default ListControls;
