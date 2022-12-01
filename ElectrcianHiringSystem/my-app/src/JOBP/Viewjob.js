
import axios from 'axios';
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewjob() {
    const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
    });
  
    const { id } = useParams();
  
    useEffect(() => {
      loadUser();
    }, []);
  
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">JOB Details</h2>
  
            <div className="card">
              <div className="card-header">
                Details of JOB: {user.id}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>JOB ID:</b>
                    {user.name}
                  </li>
                  <li className="list-group-item">
                    <b>JOB Name:</b>
                    {user.username}
                  </li>
                  <li className="list-group-item">
                    <b>JOB Location:</b>
                    {user.email}
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn btn-info" to={"/Home"}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  