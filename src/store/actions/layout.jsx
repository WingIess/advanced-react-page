import { MODAL } from '../../utils/consts';

export const modalOpen = dispatch => ({ modal: () => dispatch({ type: MODAL }) });
