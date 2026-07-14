import React, { useState } from 'react'

function NotesForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [notes, setNotes] = useState([]);
  function onSubmmit(e) {

    e.preventDefault()
    const newNote = {
      title: title,
      content: content
    }
    setNotes([...notes, newNote])
    setContent("")
    setTitle("")
  }

  return (
 
    <div className="bg-gray-100 flex justify-between   min-h-screen" >
      <div className="w-full max-w-lg bg-white  rounded-2xl ml-8  shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create Note
        </h2>

        <form className="space-y-5 " onSubmit={onSubmmit}>
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Note Title
            </label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              id="title"
              type="text"
              placeholder="Enter note title"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Category */}


          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              Note Content
            </label>
            <textarea
              id="content"
              rows={6}
              value={content}
              onChange={(e) => {
                setContent(e.target.value)
              }}
              placeholder="Write your note here..."
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* Button */}
          <div className="flex gap-3">
            <button

              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
      <div className='lg:w-1/2 p-10 '>
        <h1 className='text-xl font-bold '>Your Notes:-</h1>
        <div className='flex flex-wrap gap-5 mt-5 '>
           {notes.map((note,index)=>(<div className=' w-full rounded-2xl bg-gray-500' key={index}>
            <h1 className='text-xl font-bold p-5'> {note.title}</h1>
            <p className='ml-5 mb-6 font-bold'>{note.content}</p>
          </div>))}
        </div>
      </div>
    </div>
 
  );
}

export default NotesForm;

