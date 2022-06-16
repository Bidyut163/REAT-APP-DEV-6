import { UPLOAD_FILE } from '../actions/types';

export default (state = null, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPLOAD_FILE:
            return payload;
        default:
            return state;
    }
};
