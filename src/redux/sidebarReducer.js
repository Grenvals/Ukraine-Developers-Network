// Actions
const TOOGLE_LEFT_SIDEBAR = 'sidebar/TOOGLE_LEFT_SIDEBAR';
const TOOGLE_RIGHT_SIDEBAR = 'sidebar/TOOGLE_RIGHT_SIDEBAR';

const initialState = {
  isActiveLeftSidebar: true,
  isActiveRightSidebar: false,
};

// Reducer
const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'sidebar/TOOGLE_LEFT_SIDEBAR': {
      return {
        ...state,
        isActiveLeftSidebar: action.isActive,
      };
    }
    case 'sidebar/TOOGLE_RIGHT_SIDEBAR': {
      return {
        ...state,
        isActiveRightSidebar: action.isActive,
      };
    }
    default:
      return state;
  }
};

// Action creators
export const toogleRightSidebar = isActive => ({
  type: TOOGLE_RIGHT_SIDEBAR,
  isActive: isActive,
});

export const toogleLeftSidebar = isActive => ({
  type: TOOGLE_LEFT_SIDEBAR,
  isActive: isActive,
});

export { sidebarReducer };
