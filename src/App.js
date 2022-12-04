import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import DropStackCard from './component/DropStackCard';


function App() {
  //use useState hook to get current value
  const [dropStackArr, setDropStackArr] = useState([]);
  const [len, setLen] = useState(0);


  //create a function to add the draggable into the dropbox
  const handleToDrop = (event, dropStackArr) => {
    const newDraggable = event.target.innerText;
    dropStackArr.push(newDraggable);
    setDropStackArr(dropStackArr);
    setLen(dropStackArr.length);
    toast.success('Draggable added into dropbox successfully')

    const node = document.getElementById('aBtn');
    const newNode = node.cloneNode(true);
    newNode.classList.add('clone')
    console.log(newNode, 'node')
  }


  //create a function to delete the draggable from the dropbox
  const handleToDelete = (i) => {
    const newArr = dropStackArr.filter((element, index) => index !== i - 1)
    setDropStackArr(newArr);
    setLen(newArr.length);
    toast.error('Draggable delete from dropbox successfully')
  }


  return (
    <div className="App grid grid-cols-2 md:grid-cols-3 bg-black h-screen">
      <Toaster></Toaster>
      <div className="mt-12 mx-auto">
        <h3 className="text-xl font-semibold text-gray-300">
          Draggables
        </h3>
        <button id="aBtn" onClick={(event) => handleToDrop(event, dropStackArr)} className="block my-5 hover:bg-pink-300 border bg-white w-12 h-12 font-semibold rounded-3xl">
          A
        </button>
        <button onClick={(event) => handleToDrop(event, dropStackArr)} className="block my-5 hover:bg-pink-300 bg-white w-12 h-12 font-semibold rounded-3xl">
          B
        </button>
        <button onClick={(event) => handleToDrop(event, dropStackArr)} className="block my-5 hover:bg-pink-300 bg-white w-12 h-12 font-semibold rounded-3xl">
          C
        </button>
      </div>
      <div className="mt-32">
        <div className="w-32 h-16 bg-amber-500 rounded-lg absolute top-[110px] md:left-[38%] lg:left-[44%] z-10">

        </div>
        <div className="w-8 h-8 bg-orange-700 rounded-2xl flex items-center justify-center absolute md:top-[102px] lg:top-[105px] md:left-[60%] lg:left-[55%]">
          <p>
            {len}
          </p>
        </div>
        <div className="relative z-40">
          <h4 className="mx-auto w-48 h-32  bg-amber-300 flex justify-center items-center rounded-lg ">
            Dropbox
          </h4>
        </div>


      </div>
      <div className="col-span-2 md:col-span-1">
        <h3 className='text-xl font-semibold text-gray-300 mt-12 mb-5'>
          Drop Stack
        </h3>
        {
          dropStackArr.map((dropStack, i) => <DropStackCard
            dropStack={dropStack}
            i={i + 1}
            key={i + 1}
            handleToDelete={handleToDelete}
          ></DropStackCard>)
        }

      </div>

    </div>
  );
}

export default App;
