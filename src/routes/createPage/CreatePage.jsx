import "./CreatePage.css"
import React from 'react'
import Image from "../../Components/Image/Image";


const CreatePage = () => {
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>Create Pin</h1>
        <button>Publish</button>

      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image path="General/upload.svg" alt="" />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            We recommend using high quality .jpg files less than 20 
            files less than 200MB.
          </div>
        </div>
        <form className="createForm">
          <div className="createformItem">
            <label htmlFor="title">Title</label>
            <input
            type="text"
            placeholder="Add a title" 
            name="title" id="title"/>
          </div>
          <div className="createformItem">
            <label htmlFor="Description">Description</label>
            <textarea
              rows={6} 
              type="text"
              placeholder="Add a detailed description" 
              name="Description" id="Description"/>
          </div>
          <div className="createformItem">
            <label htmlFor="Link">Link</label>
            <input 
            type="text"
            placeholder="Add a link" 
            name="Link" id="Link"/>
          </div>

          <div className="createformItem">
            <label htmlFor="Board">Board</label>
            <select>
              <option value="" >Choose a board</option>
              <option value="" >Board1</option>
              <option value="" >Board2</option>
              <option value="" >Board3</option>
            </select>
          </div>

          <div className="createformItem">
            <label htmlFor="tags">Tagged topics</label>
            <input 
            type="text"
            placeholder="Add tags" 
            name="tags" id="tags"/>
            <small>Don&apos;t worry, your tags are hidden</small>
          </div>
        </form>

      </div>
    </div>
  )
}

export default CreatePage ;
