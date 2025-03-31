import React from "react";

interface HelloTipProps {
    className?: string;
}

const HelloTip: React.FC<HelloTipProps> = ({className}) => {
  return (
      <div className={className}>
          <div className="h-auto w-auto relative group-hover:hidden">
              <svg
                  width="117" height="96" viewBox="0 0 117 96" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M0 47.5714C0 21.2985 21.2984 0 47.5714 0H117V95.1429H47.5714C21.2984 95.1429 0 73.8444 0 47.5714Z"
                      fill="#0B0C0E"/>
              </svg>
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[56px]">👋</p>
          </div>
          <div className="h-auto w-auto relative hidden group-hover:block">
              <svg
                  width="350" height="96" viewBox="0 0 350 96" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M0 47.5714C0 21.2985 21.2984 0 47.5714 0H350V95.1429H47.5714C21.2984 95.1429 0 73.8444 0 47.5714Z"
                      fill="#0B0C0E"/>
              </svg>
              <p className="absolute m-0 top-2/5 left-2/5 transform -translate-x-1/2 -translate-y-1/2 text-[56px]">👋<span
                  className="text-white text-[24px]">Hi I’m Ayush</span></p>
          </div>
      </div>
  )
}

export default HelloTip