import React from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import PopUpCard from './popUpCard';

const RightData = () => {
  const [selected, setSelected] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelected =()=>{
    toggleModal();
  }
  
  const addTask = (Title,Date) => {
    if (Title.trim()) {
      setTasks([...tasks, { text: Title, completed: false , date:Date}]);
      // setNewTask("");
    }
  }

  

  return (
    <div className="cntRight p-4 rounded-md">
      <div className="pdRight">
        <div className="calendar mb-4">
          {/* You can integrate a calendar component/library here */}
           <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleSelected || setSelected}
            />
        </div>
       
        <div className="quote mt-12">
          <p className="text-lg italic">"The best way to get started is to quit talking and begin doing."</p>
        </div>
      </div>
      {isModalOpen && <PopUpCard  addTask={addTask} closeModal={closeModal} date={selected} />}
    </div>
  );
};

export default RightData;
