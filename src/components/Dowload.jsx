// import React from "react";

// function Download({ url, filename = "image.jpg" }) {
//   const down = async () => {
//     try {
//       const response = await fetch(url);
//         const blob = await response.blob();
        
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = filename;
//       document.body.appendChild(link);
//         link.click();
//         console.log(response);  
        
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error("Download error:", error);
//     }
//   };

//   return (
//     <button
//       onClick={down}
//       className="px-4 py-2 bg-white dark:bg-[#0F172A] rounded-lg absolute bottom-2 right-3"
//     >
//       <i className="fa-solid fa-download text-xl w-8 h-7 pt-[5px] pl-[6px] rounded-[4px] bg-white/70 text-black/80"></i>
//     </button>
//   );
// }

// export default Download;
