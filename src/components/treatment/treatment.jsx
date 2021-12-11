import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Treatment extends React.Component {
  state = {
    treatments: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8080/treatments")
      .then((res) => {
        console.log(res);
        this.setState({ treatments: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/treatments/${id}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const treatments = this.state.treatments.filter((d) => d.id != id);
        this.setState({ treatments: treatments });
        alert(res.data.tid + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="w-75 mx-auto shadow p-3 mb-5 bg-body rounded">
      <Link to="/treatments/add" className="btn btn-info float-end">
      Add
    </Link>

        <table className="table w-75 mx-auto shadow-sm p-3 mb-5 bg-body rounded ">
          <thead>
            <tr className="shadow-sm p-3 mb-5 bg-body rounded">
              <th>Treatment_Id</th>
              <th>Reports</th>
              <th>Medicines</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.treatments.map((d) => (
              <tr>
                <td>{d.tid}</td>
                <td>{d.reports}</td>
                <td>{d.medicines}</td>
                <td>{d.description}</td>
                <td>
                  <Link
                    to={`/treatments/update/${d.tid}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(d.tid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Treatment;