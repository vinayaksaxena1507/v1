import Center from '@layouts/Center/Center';
import LeftSideBar from '@layouts/LeftSidebar/LeftSidebar';
import RightSideBar from '@layouts/RightSidebar/RightSidebar';
import Navbar from '@components/Navbar/Navbar';
import React, { useState } from 'react';
import './home.scss';
import Loader from '@components/Loader/Loader';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div>
      {showContent && (
        <>
          <Navbar />
          <div className='page'>
            <div className='page__left'>
              <LeftSideBar />
            </div>
            <div className='page__center'>
              <Center />
            </div>
            <div className='page__right'>
              <RightSideBar />
            </div>
          </div>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoadingComplete} />
    </div>
  );
};

export default Home;
