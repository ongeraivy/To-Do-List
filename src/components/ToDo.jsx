import React, { useState } from 'react';
import PopUpCard from './popUpCard';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    toggleModal();
  }

  const addTask = (Title,Date) => {
    if (Title.trim()) {
      setTasks([...tasks, { text: Title, completed: false , date:Date}]);
      // setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="cntLeft  p-4 rounded-md shadow-md min-h-full ">
      <div className='pdLeft'>
        <div className='Tasks text-lg font-semibold mb-4'>List of Tasks</div>
        <ul className="mb-4">
          {tasks.map((task, index) => (
            <li key={index} className="mb-2 flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className={`ml-2 ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
              {task.text}
            </span>
          </li>
          ))}
        </ul>


        <button className="bg-blue-500 text-white text-2xl rounded-full object-left-bottom mt-96 size-12 "
            onClick={handleClick}
          >
            +
          </button>
      </div>
      {isModalOpen && <PopUpCard  addTask={addTask} closeModal={closeModal}  />}
    </div>
  );
};

export default ToDo;
