import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import Header from "./Header"
import HomePage from "./HomePage";
import TasksPage from "./TasksPage";
import VisualizerPage from "./VisualizerPage";

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

function MyApp() {
    // return (
    //     <div>
    //       <Route path="/" exact component={HomePage} />
    //       <Route path="/tasks" component={TasksPage} />
    //       <Route path="/visualizer" component={VisualizerPage} />
    //     </div>
    //   );

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

    function postTask(person) {
        const promise = fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person)
        });

        return promise;
    }

    function deleteTask(userID) {
        const promise = fetch("http://localhost:8000/users/" + userID, {
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
            <Header/>
            <Table 
                //taskData={tasks}
                taskData={tempTasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default MyApp;