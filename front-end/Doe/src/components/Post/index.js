import React from "react";
import * as C from "./styles";
import { GoKebabHorizontal } from "react-icons/go";
import { BiLike, BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

const Post = ({ name, timestamp, image, desc, filePost }) => {
  return (
    <C.Container>
      <C.Header>
        <C.SectionHeader>
          <C.Image src={image} alt="Profile" />
          <C.divNameTime>
            <C.Name>{name}</C.Name>
            <C.Timestamp>
              {new Date(timestamp?.toDate()).toLocaleString()}
            </C.Timestamp>
          </C.divNameTime>
        </C.SectionHeader>
        <C.SectionHeader>
          <GoKebabHorizontal color="#646464" />
        </C.SectionHeader>
      </C.Header>
      <C.Desc>{desc}</C.Desc>
      {filePost && (
        <C.SectionImage>
          <C.ImagePost src={filePost} />
        </C.SectionImage>
      )}
      <C.Divider />
      <C.footer>
        <C.DivButtons>
          <BiLike color="#65676b" />
          <C.LabelButtons>Curtir</C.LabelButtons>
        </C.DivButtons>
        <C.DivButtons>
          <BiComment color="#65676b" style={{ marginTop: "2px" }} />
          <C.LabelButtons>Comentar</C.LabelButtons>
        </C.DivButtons>
        <C.DivButtons>
          <RiShareForwardLine color="#65676b" />
          <C.LabelButtons>Compartilhar</C.LabelButtons>
        </C.DivButtons>
      </C.footer>
    </C.Container>
  );
};

export default Post;
