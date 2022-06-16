import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const fileDownload = require('js-file-download');

const AppealItem = ({
    appeal: { id, first_name, last_name, res_first_name, res_last_name },
}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{`${first_name} ${last_name}`}</td>
            <td>{`${res_first_name} ${res_last_name}`}</td>
            <td>
                <Link
                    to={`/official/registrar/appeals/${id}`}
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-hurricane"></i> view
                </Link>
            </td>
            <td>
                <button
                    className="btn btn-sm btn-warning"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                    onClick={async () => {
                        const res = await axios.get(`/api/download/${id}`, {
                            responseType: 'blob',
                        });

                        fileDownload(res.data, 'doc-appeal-' + id + '.pdf');
                    }}
                >
                    <i className="fas fa-download"></i> download
                </button>
            </td>
            <td>
                <Link
                    to={`/official/registrar/appeals/${id}/checklist`}
                    className="btn btn-sm btn-info"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-clipboard-list"></i> Checklist
                </Link>
            </td>
            <td>
                <Link
                    to={`/official/registrar/appeals/${id}/action`}
                    className="btn btn-sm btn-success"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-angles-right"></i> action
                </Link>
            </td>
        </tr>
    );
};

export default AppealItem;
