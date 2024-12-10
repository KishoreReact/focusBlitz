import React, { useState } from "react";

const GeneralFooter = () => {
  const [insta, setInsta] = useState(false);

  const handleClick = () => {
    setInsta(true);
  };

  return (
    <footer className="relative mt-auto flex flex-col items-center text-gray-300 mb-6 gap-2 md:flex-row md:justify-evenly">
      <div className="flex gap-x-4 md:order-last">
        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce"
          target="_blank"
          href="https://github.com/kishorereact"
        >
          <i className="bx bxl-github"></i>
        </a>
 
        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce"
          target="_blank"
          href="https://www.linkedin.com/in/kishore-c-95742712a/"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>

        {/* <a className='text-4xl hover:text-primary-color hover:animate-bounce' target='_blank' href="https://users-crud-bydt.netlify.app/">
                    <i className='bx bx-question-mark' ></i>
                </a> */}
      </div>

      <p className="md:order-2">• Copyright ©2024 | All rights reserved • </p>

      <body>
        <p id="instagram-link" onClick={handleClick} class="flex items-center cursor-pointer">
          <img src="/images/projectsImages/insta.png" alt="Instagram" width="24" height="24" class="mr-2" />
          kishore_kichuzz_
        </p>

        {insta ? (
          <script>
            document.getElementById("instagram-link").addEventListener("click",
            function(){" "}
            {
              (window.location.href =
                "https://www.instagram.com/kishore_kichuzz_?igsh=MW9kd3ZxODF0cHpvag==")
            }
            );
          </script>
        ) : (
          ""
        )}
      </body>
    </footer>
  );
};

export default GeneralFooter;
