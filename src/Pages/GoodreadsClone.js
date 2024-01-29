import React from "react";
import SocialBar from '../Social-bar';

export default function GoodreadsClone(){
  return (
    <div className="Project h-screen">
      <SocialBar />
      <body className="overflow-hidden h-screen bg-gradient-to-b from-red-400 to-fuchsia-900 text-white font-mono">
        <div className="p-4 border shadow-2xl shadow-slate-200/40 rounded-3xl mt-36 ml-96 mr-96">
          <h1 className='text-3xl font-bold text-fuchsia-200 text-center'
          >GoodreadsClone</h1>
          <h3 className='text-xl text-white text-left'>
            &emsp;&emsp;&emsp;In the Fall of 2023, my first semester of UTD one of the courses I took was Data Structures and Algorithms. A fundamental course for the Computer Science career path, and my favorite of the semester. Part of the way I was able to achieve an A in said class is my successful completion of my Airline Routing project. We were given the assignment of being able to find the most optimal path from any two cities using a text file of available flight routes.<br /> 
            &emsp;&emsp;&emsp;At first I implemented the Dijkstra's algorithm, which I did get to work, but then realized it would be difficult to ensure that when displaying the three best solutions by time and cost, I wasn't repeating any routes. I ended up with a Depth First Search Algorithm, written all in Java that successfully could navigate the graph and return the fastest, and cheapest routes between cities upon request.
          </h3>
        </div>
      </body>
    </div>
  );
}