import Link from "next/link";

import * as S from "./style";

export const ListVideo = () => {
  const playlist = [
    {
      id: 1,
      title: "Titulo do Video 1",
      channel: "Canal 1",
      views: "20 mil",
      updateData: "há 4 dias",
      thumb:
        "https://i.ytimg.com/vi/En20Y8PSWjk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbF7VvQZ76YamGEso2ELqXjgOfYw",
      href: "https://youtu.be/En20Y8PSWjk",
    },
    {
      id: 2,
      title: "Titulo do Video 2",
      channel: "Canal 2",
      views: "90 mil",
      updateData: "há 16 horas",
      thumb:
        "https://i.ytimg.com/vi/vtyV8DXAYIU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC14T-JsWQTPnekSlO7LSAJv2oUbQ",
      href: "https://www.youtube.com/watch?v=vtyV8DXAYIU",
    },
    {
      id: 3,
      title: "Titulo do Video 3",
      channel: "Canal 3",
      views: "106 mil",
      updateData: "há 6 dias",
      thumb:
        "https://i.ytimg.com/vi/_2c8YZwzaMk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBzacXZf0XZzkrhmWTHYTGpjKB9Q",
      href: "https://www.youtube.com/watch?v=_2c8YZwzaMk",
    },
    {
      id: 4,
      title: "Titulo do Video 4",
      channel: "Canal 4",
      views: "423 mil",
      updateData: "Transmitindo",
      thumb:
        "https://i.ytimg.com/vi/nQw6jgEVnxk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2t7gE-EpDEGUTt8r9wprA8RshAA",
      href: "https://www.youtube.com/watch?v=nQw6jgEVnxk",
    },
    {
      id: 5,
      title: "Titulo do Video 5",
      channel: "Canal 5",
      views: "167 mil",
      updateData: "há 5 dias",
      thumb:
        "https://i.ytimg.com/vi/8vkGADckmiI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq7QVjmdNw6t-Q0zWa_bMBbZ90tw",
      href: "https://www.youtube.com/watch?v=8vkGADckmiI",
    },
    {
      id: 6,
      title: "Titulo do Video 6",
      channel: "Canal 6",
      views: "300 mil",
      updateData: "há 10 dias",
      thumb:
        "https://i.ytimg.com/vi/668nUCeBHyY/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhFIFoocjAP&rs=AOn4CLCl73POm9NWU6FWa2B0bD2OY_bwzA",
      href: "https://www.youtube.com/watch?v=668nUCeBHyY",
    },
    {
      id: 7,
      title: "Titulo do Video 7",
      channel: "Canal 7",
      views: "150 mil",
      updateData: "há 30 dias",
      thumb:
        "https://i.ytimg.com/vi/cXKiN2kpdqo/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhUID4ocjAP&rs=AOn4CLA8DOOleSl5xb0s_IR4CwGvW9lupQ",
      href: "https://www.youtube.com/watch?v=cXKiN2kpdqo",
    },
  ];
  return (
    <S.Main>
      <S.Container>
        {playlist.map(
          ({ id, title, channel, views, updateData, thumb, href }) => (
            <S.Box kei={id}>
              <img src={thumb} />
              <S.Description>
                <h3>{title}</h3>
                <span>{channel}</span>
                <p>
                  {views} - {updateData}
                </p>
              </S.Description>
            </S.Box>
          )
        )}
      </S.Container>
    </S.Main>
  );
};
