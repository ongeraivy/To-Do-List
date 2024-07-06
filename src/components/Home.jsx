import React from 'react';
import NavTitle from './NavTitle';
import ToDo from './ToDo';
import RightData from './RightData';


function Home () {

    console.log("you are dumb")
    return (
        <div className="min-h-screen bg-blue-400">
           <div className="min-h-screen bg-white flex flex-col">
            <NavTitle/>

            <div className="flex flex-grow justify-center">
                <div className="flex flex-row w-full ">
                    <div className="w-3/4">
                        <ToDo />
                    </div>
                    <div className="w-1/4 mx-2">
                        <RightData />
                    </div>
                </div>
            </div>
            </div>
        </div>
            
        
    );
};

export default Home;