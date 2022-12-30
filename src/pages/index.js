import { useState, useRef } from "react";

import { VideoPlayer } from "../components/VideoPlayer";
import { playlist } from "../mocks/playlist";

import * as S from "../styles/pages/home";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState({
    title: playlist[0].title,
    description: playlist[0].description,
    videoUrl: playlist[0].videoUrl,
  });

  const [activePortrait, setActivePortrait] = useState(false);

  const selectVideo = (title, videoUrl, description) => {
    setActiveVideo({ title, videoUrl, description });
  };

  const handlePortrait = () => {
    setActivePortrait(!activePortrait);
  };

  return (
    <S.Container className={activePortrait && "activePortrait"}>
      <VideoPlayer
        title={activeVideo.title}
        description={activeVideo.description}
        videoUrl={activeVideo.videoUrl}
        activePortrait={handlePortrait}
      />

      <S.Main>
        <S.ListContainer>
          {playlist.map((item) => (
            <div>
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
            </div>
          ))}
        </S.ListContainer>
      </S.Main>
    </S.Container>
  );
}
