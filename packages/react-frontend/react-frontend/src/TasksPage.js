import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import Header from "./Header"

const tempTasks = [
    {
        name: "Make Frontend",
        category: "CSC 307",
        completed: false
    },
    {
        name: "Make Backend",
        category: "CSC 307",
        completed: true
    }
];

function TasksPage() {

    const [tasks, setTasks] = useState([]);

    function removeTask(index) {

        let userId = tasks[index]["_id"]

        deleteTask(userId)
            .then((res) => {
                if(res.status === 204) {
                    const updated = tasks.filter((character, i) => {
                        return i !== index;
                    });
                    setTasks(updated);
                }
            })
    }

    function updateList(person) {
        postTask(person)
            .then((res) => {
                if(res.status === 201) {
                    res.json().then((data) => {
                        let newTask = {
                            name: data.name,
                            category: data.category,
                            completed: data.completed
                        }
                        setTasks([...tasks, newTask])
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function fetchTasks() {
        const promise = fetch("http://localhost:8000/users");
        return promise;
    }

    // function fetchCompleted(){
    //     const promise = fetch("http://localhost:8000/users/completed");
    //     return promise;
    // }

    //change this to the useState var tasks after back implemented
    function getCompleted(){
        return tempTasks.filter((task) => user["completed"] === true);
    }

    function postTask(newTask) {
        const promise = fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask)
        });

        return promise;
    }

    function deleteTask(userID) {
        const promise = fetch(`http://localhost:8000/users/${userID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });

        return promise;
    }

    useEffect(() => {
        fetchTasks()
            .then((res) => res.json())
            .then((json) => setTasks(json["users_list"]))
            .catch((error) => { console.log(error); });
      }, [] );

    return (
        <div className="container">
            <Header />
            <Table 
                //taskData={tasks}
                taskData={tempTasks}
                removeTask={removeTask}
            />
            <Form handleSubmit={updateList} />

            <Table 
                //taskData={tasks}
                taskData={getCompleted()}
                removeTask={removeTask}
            />
        </div>
    );
}

export default TasksPage;