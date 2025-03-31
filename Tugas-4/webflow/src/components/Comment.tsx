import React from "react";

interface CommentProps {
    comment: string;
    src: string;
    title: string;
    description: string;
}

const Comment: React.FC<CommentProps> = ({comment, src, title, description}) => {
  return (
      <div className="flex flex-col gap-7">
          <p className="text-[27px] text-[#3C3D3E]">
              {comment}
          </p>
          <div className="flex flex-row items-center gap-3">
              <img src={src} alt="..."/>
              <div className="flex flex-col">
                  <p className="text-[18px] text-[#0B0C0E] font-medium">{title}</p>
                  <p className="text-[14px] text-[#0B0C0E] font-normal">{description}</p>
              </div>
          </div>
      </div>
  )
}
export default Comment