import React from 'react';
import avatar from '../avatar.png';
import facebook from '../components/images/facebook.png';
import linkedin from '../components/images/linkedin.png';
import instagram from '../components/images/instagram.png';

export default function Pillars() {
  return (
    <div className="pillars px-4 sm:px-20">
      <div className="text-center pt-12">
        <h1 className="text-xl sm:text-lg font-semibold">
          Lorem Ipsum
        </h1>
        <h2 className="text-4xl sm:text-3xl mt-1 font-bold">
          OUR PILLARS
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row mt-4 sm:mt-12 justify-center flex-wrap">
        {/* Card 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 sm:mb-0 px-2">
          <div className="w-full flex flex-col relative">
            <img src={avatar} alt="avatar" />
            <div className="bg-white py-12 text-center px-4">
              <div className="text-lg font-bold sm:text-xl">Lorem Ipsum 1</div>
              <div className="text-sm font-semibold">General Manager</div>
              <div className="text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className="mt-6 flex justify-center items-center">
                <div className="w-[40%] sm:w-auto flex">
                  <img src={facebook} alt="facebook" className="w-6 sm:w-10 mx-2" />
                  <img src={instagram} alt="instagram" className="w-6 sm:w-10 mx-2" />
                  <img src={linkedin} alt="linkedin" className="w-6 sm:w-10 mx-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 sm:mb-0 px-2">
          <div className="w-full flex flex-col relative">
            <div className="bg-white py-12 text-center px-4">
              <div className="text-lg font-bold sm:text-xl">Lorem Ipsum 1</div>
              <div className="text-sm font-semibold">General Manager</div>
              <div className="text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className="mt-6 flex justify-center items-center">
                <div className="w-[40%] sm:w-auto flex">
                  <img src={facebook} alt="facebook" className="w-6 sm:w-10 mx-2" />
                  <img src={instagram} alt="instagram" className="w-6 sm:w-10 mx-2" />
                  <img src={linkedin} alt="linkedin" className="w-6 sm:w-10 mx-2" />
                </div>
              </div>
            </div>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        {/* Card 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 sm:mb-0 px-2">
          <div className="w-full flex flex-col relative">
            <img src={avatar} alt="avatar" />
            <div className="bg-white py-12 text-center px-4">
              <div className="text-lg font-bold sm:text-xl">Lorem Ipsum 1</div>
              <div className="text-sm font-semibold">General Manager</div>
              <div className="text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className="mt-6 flex justify-center items-center">
                <div className="w-[40%] sm:w-auto flex">
                  <img src={facebook} alt="facebook" className="w-6 sm:w-10 mx-2" />
                  <img src={instagram} alt="instagram" className="w-6 sm:w-10 mx-2" />
                  <img src={linkedin} alt="linkedin" className="w-6 sm:w-10 mx-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 sm:mb-0 px-2">
          <div className="w-full flex flex-col relative">
            <div className="bg-white py-12 text-center px-4">
              <div className="text-lg font-bold sm:text-xl">Lorem Ipsum 1</div>
              <div className="text-sm font-semibold">General Manager</div>
              <div className="text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className="mt-6 flex justify-center items-center">
                <div className="w-[40%] sm:w-auto flex">
                  <img src={facebook} alt="facebook" className="w-6 sm:w-10 mx-2" />
                  <img src={instagram} alt="instagram" className="w-6 sm:w-10 mx-2" />
                  <img src={linkedin} alt="linkedin" className="w-6 sm:w-10 mx-2" />
                </div>
              </div>
            </div>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}
