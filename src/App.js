import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';



function App() {
  //use useState hook to get current value
  const [dropStackArr, setDropStackArr] = useState([]);
  const [len, setLen] = useState(0);
  const [draggable, setDraggable] = useState('');


  //create a function to add the draggable into the dropbox
  const handleDragStart = (e) => {
    setDraggable(e.target.innerText);
  };
  const handleDragEnter = (dropStackArr) => {
    dropStackArr.push(draggable);
    setDropStackArr(dropStackArr);
    setLen(dropStackArr.length);
    toast.success('Draggable added into dropbox successfully')
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
        <button id="aBtn"
          onDragStart={(e) => handleDragStart(e, dropStackArr)}
          draggable className="block  my-5 hover:bg-pink-300 border bg-white w-12 h-12 font-semibold rounded-3xl">
          A
        </button>
        <button onDragStart={(e) => handleDragStart(e)} draggable className="block my-5 hover:bg-pink-300 bg-white w-12 h-12 font-semibold rounded-3xl">
          B
        </button>
        <button onDragStart={(e) => handleDragStart(e)} draggable className="block my-5 hover:bg-pink-300 bg-white w-12 h-12 font-semibold rounded-3xl">
          C
        </button>
      </div>
      <div className="mt-32 mobileResponsive">

        <div onDragEnter={(e) => handleDragEnter(dropStackArr)} className="mx-auto  md:w-48 h-32  bg-amber-300 flex justify-center items-center rounded-lg relative">
          <div className="w-32 h-16 bg-amber-500 rounded-lg absolute top-[-10%]  left-[0%] ">

          </div>
          <div className="w-8 h-8 bg-orange-700 rounded-2xl flex items-center justify-center absolute   top-[-20%]  left-[93%]">
            <p>
              {len}
            </p>
          </div>
          <h4 >
            Dropbox
          </h4>
        </div>


      </div>
      <div className="col-span-2 md:col-span-1">
        <h3 className='text-xl font-semibold text-gray-300 mt-12 mb-5'>
          Drop Stack
        </h3>
        {
          dropStackArr.map((dropStack, i) =>
            <div className=" my-3 bg-zinc-700 text-gray-400 w-1/2 mx-auto py-1 flex justify-between px-2 rounded-sm">
              <p>{dropStack} dropped</p>
              <button onClick={() => handleToDelete(i + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
