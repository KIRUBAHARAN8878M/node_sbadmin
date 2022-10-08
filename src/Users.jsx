import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { env } from './config';

function Users() {

    const [users, setUsers] = useState([]);

    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true);
        let users = await axios.get(`${env.api}/getallusers?limit=100&offset=0`);
        setUsers(users.data);
        setLoading(false);
    }

let userDelete = async (id) =>{
    try {
        let ask = window.confirm("Are You Sure! Do You Want To Delete This Data?");
        if(ask){
            await axios.delete(`${env.api}/deleteuser/${id}`);
        }
        
        loadData();
    } catch (error) {
        console.log(error)
    }
} 

return (
 <div className="container">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <FontAwesomeIcon className="fal mx-2 fa-sm text-white-50" icon={faUsers} />
             Create User</Link>
            </div>
            {
                isLoading ? (<span> Loading . . .</span>) : (
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">User Data Details</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>#S.no</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>#S.no</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            users.map((user, index) => {
                                                return <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.position}</td>
                                                    <td>{user.office}</td>
                                                    <td>{user.age}</td>
                                                    <td>{user.startDate}</td>
                                                    <td>${user.salary}</td>
                                                    <td>
                                                        <Link to={`/portal/users/${user._id}`} className='btn btn-sm btn-warning mr-2'>View</Link>
                                                        
                                                        <Link to={`/portal/users/edit/${user._id}`} className='btn btn-sm btn-primary mr-2'>Edit</Link>
                                                       
                                                        <button onClick={()=>{
                                                                userDelete(user._id)
                                                        }} className='btn btn-sm btn-danger mr-2'>Delete</button>
                                                    </td>
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Users;