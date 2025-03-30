import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';


const ViewPaste = () => {

  const {id}=useParams();

  const allPastes=useSelector((state)=>state.paste.pastes);
  // Filter pastes based on search term (by title or content)
  const paste=allPastes.filter((p)=>p._id===id)[0];
  console.log("Final Paste: ", paste);

  return (
    <div className='w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0'>
      <div className='flex flex-col gap-y-5 items-start'>

          <input
            // dynamic width based on whether pasteId is present 
            className="w-full border border-input rounded-md p-2"
            type='text'
            placeholder='Title'
            value={paste.title}
            disabled
            // onChange={(e) => setTitle(e.target.value)}
          />
        
        <div className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121, 121,0.3)] backdrop-blur-2xl`}>
            <div className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121, 121,0.3)]`}>
              {/* Three Circle */}
              <div className="w-full flex gap-x-[6px] items-center select-none group">
                <div className="w-[13px] h-[14px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />
                <div className={`w-[13px] h-[14px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`} />
                <div className="w-[13px] h-[14px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
              </div>
              {/* Copy btn */}
              <div>
                <button
                  className={`flex justify-center items-center transition-all duration-300 ease-in-out group`}
                  onClick={()=>{
                    navigator.clipboard.writeText(paste.content);
                    toast.success("Copied to Clipboard", {
                      position:"top-right",
                    });
                  }}
                >
                  <Copy className="group-hover:text-sucess-500" size={20}/>
                </button>
              </div>
            </div>
            
            {/* TextArea */}
            <textarea
            className='w-full p-3 focus-visible:ring-0'
            value={paste.content}
            placeholder='Write your content here...'
            disabled
            rows={20}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPaste
