import axios from 'axios';
import { UPLOAD_FILE, FILE_ERROR } from './types';

export const upload =
    (id, file, setMessage, setUploadPercentage) => async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
                setUploadPercentage(
                    parseInt(
                        Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        )
                    )
                );

                // Clear percentage
                // setTimeout(() => setUploadPercentage(0), 10000);
            },
        };

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post(`/api/upload/${id}`, formData, config);

            dispatch({
                type: UPLOAD_FILE,
                payload: res.data,
            });
            setMessage('File Uploaded');
        } catch (err) {
            dispatch({ type: FILE_ERROR });
            if (err.response.status === 500) {
                setMessage('there was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    };
