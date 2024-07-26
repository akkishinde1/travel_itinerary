import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="mb-8 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
        Welcome to TripIt
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
        Your ultimate travel companion for booking trips and exploring new destinations.
      </p>
      
      <div className="flex space-x-4">
        <a
          href="/home"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Explore Destinations
        </a>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
          Explore Destinations
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img
              src="https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/destination/m_destination-goa-landscape_l_400_640.jpg"
              alt="Destination 1"
              className="mb-4 rounded-lg"
            />
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Beautiful Beaches
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Discover the most stunning beaches around the world.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img
              src="https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/t_ufs/m_Rishikesh_tv_destination_img_1_l_733_1099.jpg"
              alt="Destination 2"
              className="mb-4 rounded-lg"
            />
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Mountain Adventures
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Experience thrilling adventures in the mountains.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img
              src="https://hblimg.mmtcdn.com/content/hubble/img/homepage_img/mmt/activities/m_w2g_homepage_Pilgrimage_l_2433_4031.jpg"
              alt="Destination 3"
              className="mb-4 rounded-lg"
            />
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cultural Experiences
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Immerse yourself in rich cultures and traditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
