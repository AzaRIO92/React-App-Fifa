import React, { useContext } from 'react';
import { Carousel } from 'antd';
import { themeContext } from '../contexts/ThemeContext';

const Content = () => {
  const { theme } = useContext(themeContext);

  const contentStyle = {
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme === 'light' ? '#333' : '#fff',
    background: theme === 'light' ? '#fff' : '#333',
  };

  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    border: theme === 'light' ? 'none' : '2px solid #fff',
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <Carousel autoplay draggable={false}>
        <div>
          <h3 style={contentStyle}>
            <img
              className='img'
              src={'https://digitalhub.fifa.com/transform/907527d7-4f33-4e70-bd35-8e61f0e33263/FU17WC_Indonesia2023_Thumbnail?io=transform:fill,aspectratio:16x9,width:450&quality=75'}
              alt=""
              style={imgStyle}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              className='img'
              src={'https://digitalhub.fifa.com/transform/ad8cfa3c-18a4-493a-ad24-fba68485a896/The-Best-2023-thumbnail?io=transform:fill,aspectratio:16x9,width:450&quality=75'}
              alt=""
              style={imgStyle}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              className='img'
              src={'https://digitalhub.fifa.com/transform/c1960ccd-f89c-44d5-bdea-e319c075cfdb/FPLS_FCWC2023_Thumbnail_01?io=transform:fill,aspectratio:16x9,width:450&quality=75'}
              alt=""
              style={imgStyle}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              className='img'
              src={'https://digitalhub.fifa.com/transform/327117d9-d13a-471a-b40e-9fac69ac1b52/FPLS_FBSWC2024_Thumbnail_01?io=transform:fill,aspectratio:16x9,width:450&quality=75'}
              alt=""
              style={imgStyle}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              className='img'
              src={'https://digitalhub.fifa.com/transform/b4d0cf3d-795e-438c-9b59-753a030d2e24/Olympics-Paris-2024-Logo?io=transform:fill,aspectratio:16x9,width:450&quality=75'}
              alt=""
              style={imgStyle}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              className='img'
              src={'https://digitalhub.fifa.com/transform/235ddd27-575c-405c-9568-ef6ef2d05ec4/FPS_FWC26_Hero_PostLaunch?io=transform:fill,aspectratio:16x9,width:450&quality=75'}
              alt=""
              style={imgStyle}
            />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Content;

