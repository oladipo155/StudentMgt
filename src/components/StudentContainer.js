import React from 'react';
import StudentList from './StudentList';
import Header from './Header';
class StudentContainer extends React.Component{
    state = {
        students: [
            {
                matric: 1,
                fullname: 'Olusare Adegbagi',
                graduated: false
            },
            {
                matric: 2,
                fullname: 'Lateef Obinna',
                graduated: true
            },
            {
                matric: 3,
                fullname: 'Jose Banks',
                graduated: true
            },
            {
                matric: 4,
                fullname: 'Grace Etukumo',
                graduated: false
            },
            {
                matric: 5,
                fullname: 'James Okon',
                graduated: true
            },
            {
                matric: 6,
                fullname: 'Sunday Egharevba',
                graduated: true
            },
            {
                matric: 7,
                fullname: 'Ojo Rasaki',
                graduated: false
            },
        ],
        description: 'This is a student mgt app!'
    }
   //handleChange = (matric, fullname) => {
        //console.log(`Student with matric ${matric} and fullname ${fullname} was clicked!`)
    //}
    handleChange = (matric) => {
        this.setState(prevState => ({
            students: prevState.students.map( student => {
                if(student.matric === matric){
                    return {
                        ...student,
                        graduated: !student.graduated
                    }
                }
                return student
            })}
        ))
    }

    delStudent = (matric) => {
       // console.log(`Student with matric ${matric} has been deleted`)
    //}
    this.setState({
        students: [
            ...this.state.students.filter(student => {
                return student.matric !== matric
            })
        ]
    })
    }
    render(){
        return(
            <div>
                <Header/>
                <StudentList delStudentProps={this.delStudent} handleChangeProps = {this.handleChange} descr = {this.state.description} students={this.state.students}/>
            </div>
        )
    }
}
export default StudentContainer;




