import { useEffect } from "react";

<import>useEffect</import>
function Popup({ isVisible, hidePopup, children }) {
    if(!isVisible) { return null }
    useEffect(() => {
        const handleEscape = (event) => {
          if(event.key === 'Escape') {
            hidePopup();
          }
        };
    
        window.addEventListener('keydown', handleEscape);
    
        return () => window.removeEventListener('keydown', handleEscape);
      }, [hidePopup]);

    
    
    return (
      <div onClick={hidePopup} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-items-center items-center">
        <div onClick={(e) => e.stopPropagation() } className="max-w-xl w-144 mx-auto flex flex-col">
          <button
            onClick={hidePopup}
            className="bg-transparent text-black text-xl place-self-end">
            X
          </button>
          <div className="bg-white text-blue-800 p-8">
            {children}
          </div>
        </div>
      </div>
    )
  }
  
  export default Popup;