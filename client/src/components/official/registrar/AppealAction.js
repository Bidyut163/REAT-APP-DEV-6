import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { forwardToBench } from '../../../actions/appeal';

const AppealAction = ({ match, forwardToBench, history }) => {
    const onSubmit = () => {
        const { id } = match.params;

        forwardToBench(id, history);
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Forward Appeal</h1>
            <p className="mb-4">Take Action if Form A filled Up</p>

            <div className="row">
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Revert Back To Appellant
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="chart-area">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <textarea
                                                className="form-control"
                                                rows="10"
                                                placeholder="Reason for reverting back the appeal"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <button
                                                to="#"
                                                className="btn btn-danger btn-icon-split"
                                            >
                                                <span className="icon text-white-50">
                                                    <i className="fa-solid fa-angles-left"></i>
                                                </span>
                                                <span className="text">
                                                    Revert Back To Appellant
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Forward Appeal To Bench
                            </h6>
                        </div>
                        <div className="card-body">
                            <p>
                                If checklist has been filled up for the Appeal
                                and all the documents are fine please forward
                                the appeal to the bench.
                            </p>
                            <button
                                onClick={() => onSubmit()}
                                className="btn btn-success btn-icon-split"
                            >
                                <span className="icon text-white-50">
                                    <i className="fa-solid fa-angles-right"></i>
                                </span>
                                <span className="text">Forward to Bench</span>
                            </button>
                            <div className="my-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { forwardToBench })(withRouter(AppealAction));
