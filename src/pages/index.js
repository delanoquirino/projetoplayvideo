import { useState } from "react";
import Image from "next/image";

import { VideoPlayer } from "../components/VideoPlayer";
import { playlist } from "../mocks/playlist";

import * as S from "../styles/pages/home";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState({
    titleVideo: playlist[0].title,
    description: playlist[0].description,
    videoUrl: playlist[0].videoUrl,
  });

  const [activePortrait, setActivePortrait] = useState(false);

  const selectVideo = (titleVideo, videoUrl, description) => {
    setActiveVideo({ titleVideo, videoUrl, description });
  };

  const handlePortrait = () => {
    setActivePortrait(!activePortrait);
  };

  return (
    <S.Container className={activePortrait && "activePortrait"}>
      <VideoPlayer
        titleVideo={activeVideo.titleVideo}
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
                  selectVideo(item.titleVideo, item.videoUrl, item.description)
                }
              >
                <Image
                  width={300}
                  height={100}
                  alt={item.titleVideo}
                  src={item.thumb}
                />
                <S.Description>
                  <h3>{item.titleVideo}</h3>
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
