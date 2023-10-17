import React from 'react';
import facebook from '../components/images/facebook.png';
import linkedin from '../components/images/linkedin.png';
import instagram from '../components/images/instagram.png';

export default function Card1(props) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 sm:mb-0 px-2">
      <div className="w-full flex flex-col relative">
        <img src={props.image} alt="avatar" />
        <div className="bg-white py-16 text-center px-4 relative">
        <div class="left-[50%] transform -translate-x-1/2 absolute top-0 -mt-2 w-4 h-4 bg-white border-t border-l rotate-45"></div>
          <div className="text-sm font-bold sm:text-lg">{props.name}</div>
          <div className="text-xs font-semibold">{props.designation}</div>
          <div className="text-xs mt-4">{props.para}</div>
          <div className="mt-6 flex justify-center items-center">
            <div className="w-[40%] sm:w-auto flex">
              <a href="">
                <img src={facebook} alt="facebook" className="w-6 sm:w-6 mx-2" />
              </a>
              <a href="">
                <img src={instagram} alt="instagram" className="w-6 sm:w-6 mx-2" />
              </a>
              <a href="">
                <img src={linkedin} alt="linkedin" className="w-6 sm:w-6 mx-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
