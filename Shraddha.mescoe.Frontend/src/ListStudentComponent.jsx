import React, { Component } from 'react';
import StudentServices from './StudentServices';


class ListStudentComponent extends Component {
    constructor() {
        super();
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        StudentServices.getStudents().then((res) => {
            this.setState({ students: res.data });
        }
        );
    }

    render() {
        return (
            <div>


                <h2 className="text-center"> Student List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <th>Student Department</th>
                                <th>Student city</th>
                                <th>Student Name</th>
                                <th> Sport Name</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.state.students.map(
                                    students =>
                                        <tr key={students.sid}>
                                            <td> {students.department} </td>
                                            <td> {students.scity} </td>
                                            <td> {students.sname} </td>
                                            <td> {students.sportname} </td>


                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ListStudentComponent;
