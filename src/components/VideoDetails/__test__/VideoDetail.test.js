import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppContext } from '../../../context/appContext';
import { VideoDetails } from '../VideoDetails';
import data from '../../../mocks/youtube.json';

describe('Testing VideoDetails', () => {
  const contextValue = {
    dispatch: jest.fn(),
    data: {
      search: 'wizeline',
      showVideoDetails: false,
    },
  };

  const video = data.items[1];

  const selectVideo = jest.fn();

  beforeEach(() => {
    render(
      <AppContext.Provider value={contextValue}>
        <VideoDetails video={video} videoList={data.items} selectVideo={selectVideo} />
      </AppContext.Provider>
    );
  });
  it('should match snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
});
