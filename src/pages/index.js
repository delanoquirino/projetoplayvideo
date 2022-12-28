import { useState, useRef } from "react";

import { PlayVideo } from "../components/PlayVideo";

import { playlist } from "../mocks/playlist";

import { useVideoPlayer } from "../hooks/useVideoPlayer";

import * as S from "../styles/pages/home";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState({
    title: playlist[0].title,
    description: playlist[0].description,
    videoUrl: playlist[0].videoUrl,
  });

  const selectVideo = (title, videoUrl, description) => {
    setActiveVideo({ title, videoUrl, description });
  };

  return (
    <>
      <S.Container>
        <PlayVideo
          title={activeVideo.title}
          description={activeVideo.description}
          videoUrl={activeVideo.videoUrl}
        />

        <S.Main>
          <S.ListContainer>
            {playlist.map((item) => (
              <S.Box
                key={item.id}
                onClick={() =>
                  selectVideo(item.title, item.videoUrl, item.description)
                }
              >
                <img src={item.thumb} />
                <S.Description>
                  <h3>{item.title}</h3>
                  <span>{item.channel}</span>
                  <p>
                    {item.views} - {item.updateData}
                  </p>
                </S.Description>
              </S.Box>
            ))}
          </S.ListContainer>
        </S.Main>
      </S.Container>
    </>
  );
}
