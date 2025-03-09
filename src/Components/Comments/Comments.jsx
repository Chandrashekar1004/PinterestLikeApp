import React, { useState } from 'react'
import "./Comments.css"
import Image from '../Image/Image'
import EmojiPicker from 'emoji-picker-react'

const Comments = () => {
  const [open,setOpen]=useState(false);
  
  return (
    <div className='comments'>
      <div className="commentList">
        <span className='commentCount'>5 comments</span>
        <div className="comment">
          <Image path="General/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>Iyer</span>
            <p className='commentText'>
              If you can smellllll
            </p>
            <span className='commentTime'>1hr</span>
          </div>
        </div>
        <div className="comment">
          <Image path="General/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>Iyer</span>
            <p className='commentText'>
              This is awesome
            </p>
            <span className='commentTime'>1hr</span>
          </div>
        </div>
        <div className="comment">
          <Image path="General/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>Iyer</span>
            <p className='commentText'>
              Hogan Suckzzzzzz
            </p>
            <span className='commentTime'>1hr</span>
          </div>
        </div>
      </div>
      <form className='commentForm'>
        <input type='text' placeholder='Add a comment'/>
        <div className='emoji'>
          <div  onClick={()=>setOpen((prevOpen)=>!prevOpen)}>🔥</div>
          {open && <div className='emojiList'>
            <EmojiPicker />
          </div>}
        </div>
      </form>
    </div>
  )
}

export default Comments;
