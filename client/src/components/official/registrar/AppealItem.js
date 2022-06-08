import React from 'react';
import { Link } from 'react-router-dom';

const AppealItem = ({
    appeal: { id, firstName, lastName, addressLine1, addressLine2 },
}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{`${addressLine1} ${addressLine2}`}</td>
            <td>
                <Link
                    to={`/official/registrar/appeals/${id}`}
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    view
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
