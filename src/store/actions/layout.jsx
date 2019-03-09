import { MODAL } from '../../utils/consts';

export const modalOpen = dispatch => ({ modal: () => dispatch({ type: MODAL }) });

export const modalState = state => ({modalState: state.modal});
