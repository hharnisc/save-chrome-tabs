import { setState, getState } from '../chromeStorage';
import { createTabs } from '../tabManager';

export const SET_SAVE_SELECTED = 'SET_SAVE_SELECTED';
export const REMOVE_TAB_GROUP = 'REMOVE_TAB_GROUP';
export const TAB_GROUP_NAME_CHANGE = 'TAB_GROUP_NAME_CHANGE';
export const SET_TAB_GROUP_ERROR = 'SET_TAB_GROUP_ERROR';

const setSaveSelected = saveSelected => ({
  type: SET_SAVE_SELECTED,
  saveSelected,
});

const setRemoveTabGroup = tabGroupKey => ({
  type: REMOVE_TAB_GROUP,
  tabGroupKey,
});

const setTabGroupError = tabGroupError => ({
  type: SET_TAB_GROUP_ERROR,
  tabGroupError,
});

// TODO: handle error case with catch and visualize it
export const syncSaveSelected = saveSelected => dispatch =>
  setState({ saveSelected })
    .then(() => dispatch(setSaveSelected(saveSelected)));

export const openTabGroup = tabs => createTabs(tabs);

// TODO: handle error case with catch and visualize it
export const removeTabGroup = tabGroupKey => dispatch =>
  getState()
    .then(state => state.tabGroups)
    .then(tabGroups => setState({
      tabGroups: tabGroups.filter((tabGroup, i) => i !== tabGroupKey),
    }))
    .then(() => dispatch(setRemoveTabGroup(tabGroupKey)));

export const tabGroupNameChange = tabGroupName => ({
  type: TAB_GROUP_NAME_CHANGE,
  tabGroupName,
});

export const saveTabGroup = ({ tabGroupName, close, saveSelected }) => dispatch => {
  if (!tabGroupName) {
    dispatch(setTabGroupError(true));
  } else {
    console.log('save it');
  }
};
