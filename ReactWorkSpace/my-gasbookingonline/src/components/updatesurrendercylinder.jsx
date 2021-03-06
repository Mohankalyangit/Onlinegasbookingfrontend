import React from "react";
import axios from "axios";

class UpdateSurrenderCylinder extends React.Component {
    state = {
        surrendercylinder: {
            surrenderId: "",
            surrenderDate: "",
          
        },
        errors: {},
        errorMsg: "",
    };

    componentDidMount() {
        const dataUrl = `http://localhost:8080/surrendercylinder/getSingleCylinder/${this.props.match.params.surrenderId}`;
        axios.get(dataUrl).then((response) => {
            console.log(response.data);
            this.setState({
                ...this.state.surrendercylinder,
                surrendercylinder : response.data
            })
        }).catch((error) => {
            console.log(error);
            this.setState({
                ...this.state,
                error : error.response.data.message
            });
        });
    }

    updateInput = (event) => {
        this.setState({
            surrendercylinder: {
                ...this.state.surrendercylinder,
                [event.target.name]: event.target.value,
            },
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle Submit");

        // //validate before sending request
        // this.setState({
        //     errors: this.validate()
        // });
        // console.log(this.state.errors);

        // if (this.state.errors)
        //     return;

        // sending request
        const dataUrl = `http://localhost:8080/surrendercylinder/updateSurrenderCylinder/${this.props.match.params.surrenderId}`;
        axios
            .put(dataUrl, this.state.surrendercylinder)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Update cylinder details " +
                        this.state.surrendercylinder.surrenderId +
                        " successfully !!!"
                );
                this.props.history.push("/surrendercylinder");
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    errorMsg: error.response.data.message,
                });
            });
    };

    render() {
        const { surrendercylinder } = this.state;
        const { errors, errorMsg } = this.state;
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <div className="card mt-3">
                                    <div className="card-header bg-warning text-black text-center">
                                        <h4 className="fw-bolder">
                                            Update SurrenderCylinder
                                        </h4>
                                    </div>
                                    {errorMsg && (
                                        <div
                                            className="alert alert-danger"
                                            role="alert"
                                        >
                                            {errorMsg}
                                        </div>
                                    )}
                                    <form
                                        className="shadow p-3 mt-1 bg-warning rounded text-center"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="mb-2">
                                            <label
                                                htmlFor="surrenderId"
                                                className="form-label fw-bold text-black"
                                            >
                                               surrenderId
                                            </label>
                                            <input
                                                type="int"
                                                className="form-control"
                                                // placeholder="Username"
                                                id="surrenderId"
                                                name="surrenderId"
                                                value={surrendercylinder.surrenderId}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.username}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="Date"
                                                className="form-label fw-bold text-black"
                                            >
                                                Date
                                            </label>
                                            <input
                                                type="Date"
                                                className="form-control"
                                                // placeholder="Mobile Number"
                                                id="Date"
                                                name="surrenderDate"
                                                value={surrendercylinder.surrenderDate}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.mobileNumber}
                                                </small>
                                            )}
                                        </div>
                                         <div className="d-grid gap-2 mt-2">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-md text-black fw-bold"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UpdateSurrenderCylinder;