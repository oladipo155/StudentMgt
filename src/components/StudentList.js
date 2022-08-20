import React from 'react';
import Student from './Student'; 
class StudentList extends React.Component{
    render(){
        return(
            <ul>
            {this.props.students.map(student => (
                    <Student delStudent={this.props.delStudentProps} handleChangeProps = {this.props.handleChangeProps} key ={student.matric} student={student}/>
            ))}
        </ul>
        )
    }
}
export default StudentList