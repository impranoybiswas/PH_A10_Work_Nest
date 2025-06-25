import React from "react";
import SectionHeader from "../customs/SectionHeader";

function MostVisited() {
  return (
    <section
      className="flex flex-col gap-4 w-full"
        data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <SectionHeader
        title="Most Visited Tasks"
        subtitle="Check out our most visited and popular tasks"
      />

      <div className="w-full border-primary/50 hover:border-primary rounded-lg shadow-sm border-[2px] grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-6 cursor-pointer">
        <div className="w-full h-90 rounded-lg shadow-sm bg-red-50 hover:scale-y-105 transition-all duration-500 ease-in-out p-3 flex flex-col items-center gap-2 relative">
          <img
            className="w-full h-40 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="most task"
          />
          <div className="absolute top-4 right-4 px-2 py-1 flex justify-center items-center bg-red-100 text-red-400 rounded-lg text-sm">
            Graphic Desgining
          </div>
          <div className="w-full h-10 flex justify-center items-center bg-red-100 text-red-400 rounded-lg">
            Edit Photo With Gradient
          </div>
          <div className="divider my-2 text-gray-800">DROP BY</div>
          <div className="flex justify-center items-center gap-2 py-1 w-full bg-red-300 text-white p-1 rounded-lg">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-1 ring-offset-2">
                <img className="w-full h-full object-cover" src="https://th.bing.com/th/id/OIP.-_iC7yEZ__5N7jJntUolfQHaHa?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain" />
              </div>
            </div>{" "}
            <div className="flex flex-col">
              <span className="font-semibold ">Priya Das</span>
              <span className="text-sm">Since 2024</span>
            </div>
          </div>

          <div className="flex justify-center items-center text-primary">
            BIDDED :{" "}
            <span className="font-semibold h-6 px-2 border-primary border-[2px] rounded-full flex items-center justify-center text-primary ml-2">
              350
            </span>
          </div>
        </div>

        <div className="w-full h-90 rounded-lg shadow-sm bg-blue-50 hover:scale-y-105 transition-all duration-500 ease-in-out p-3 flex flex-col items-center gap-2 relative">
          <img
            className="w-full h-40 object-cover rounded-lg"
            src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg"
            alt="most task"
          />
          <div className="absolute top-4 right-4 px-2 py-1 flex justify-center items-center bg-blue-100 text-blue-400 rounded-lg text-sm">
            Web Development
          </div>
          <div className="w-full h-10 flex justify-center items-center bg-blue-100 text-blue-400 rounded-lg">
            Create A Mordern Webapp
          </div>
          <div className="divider my-2 text-gray-800">DROP BY</div>
          <div className="flex justify-center items-center gap-2 py-1 w-full bg-blue-300 text-white p-1 rounded-lg">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-1 ring-offset-2">
                <img src="https://th.bing.com/th/id/OIP.jJibXxxJXyOI38MT93MzywHaHa?cb=iwp2&w=1200&h=1200&rs=1&pid=ImgDetMain" />
              </div>
            </div>{" "}
            <div className="flex flex-col">
              <span className="font-semibold ">Saiful Islam</span>
              <span className="text-sm">Since 2022</span>
            </div>
          </div>

          <div className="flex justify-center items-center text-primary">
            BIDDED :{" "}
            <span className="font-semibold h-6 px-2 border-primary border-[2px] rounded-full flex items-center justify-center text-primary ml-2">
              142
            </span>
          </div>
        </div>

        <div className="w-full h-90 rounded-lg shadow-sm bg-teal-50 hover:scale-y-105 transition-all duration-500 ease-in-out p-3 flex flex-col items-center gap-2 relative">
          <img
            className="w-full h-40 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="most task"
          />
          <div className="absolute top-4 right-4 px-2 py-1 flex justify-center items-center bg-teal-100 text-teal-400 rounded-lg text-sm">
            Data Entry
          </div>
          <div className="w-full h-10 flex justify-center items-center bg-teal-100 text-teal-400 rounded-lg">
            Collect Data From Video
          </div>
          <div className="divider my-2 text-gray-800">DROP BY</div>
          <div className="flex justify-center items-center gap-2 py-1 w-full bg-teal-300 text-white p-1 rounded-lg">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-1 ring-offset-2">
                <img src="https://th.bing.com/th/id/OIP.B9rT9813nCfY66aV8pvhywHaHa?cb=iwp2&rs=1&pid=ImgDetMain" />
              </div>
            </div>{" "}
            <div className="flex flex-col">
              <span className="font-semibold ">Ahamed Karim</span>
              <span className="text-sm">Since 2023</span>
            </div>
          </div>

          <div className="flex justify-center items-center text-primary">
            BIDDED :{" "}
            <span className="font-semibold h-6 px-2 border-primary border-[2px] rounded-full flex items-center justify-center text-primary ml-2">
              344
            </span>
          </div>
        </div>

        <div className="w-full h-90 rounded-lg shadow-sm bg-purple-50 hover:scale-y-105 transition-all duration-500 ease-in-out p-3 flex flex-col items-center gap-2 relative">
          <img
            className="w-full h-40 object-cover rounded-lg"
            src="https://cdn.pixabay.com/photo/2017/09/02/15/38/image-editing-2707653_1280.jpg"
            alt="most task"
          />
          <div className="absolute top-4 right-4 px-2 py-1 flex justify-center items-center bg-purple-100 text-purple-400 rounded-lg text-sm">
          Video Editing
          </div>
          <div className="w-full h-10 flex justify-center items-center bg-purple-100 text-purple-400 rounded-lg">
          Cut and Joind Videos
          </div>
          <div className="divider my-2 text-gray-800">DROP BY</div>
          <div className="flex justify-center items-center gap-2 py-1 w-full bg-purple-300 text-white p-1 rounded-lg">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-1 ring-offset-2">
                <img src="https://th.bing.com/th/id/OIP.Tx4nVbZkCKU3bzSvqM8qZAHaHa?cb=iwp2&rs=1&pid=ImgDetMain" />
              </div>
            </div>{" "}
            <div className="flex flex-col">
              <span className="font-semibold ">Samim Sarkar</span>
              <span className="text-sm">Since 2023</span>
            </div>
          </div>

          <div className="flex justify-center items-center text-primary">
            BIDDED :{" "}
            <span className="font-semibold h-6 px-2 border-primary border-[2px] rounded-full flex items-center justify-center text-primary ml-2">
              222
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MostVisited;
