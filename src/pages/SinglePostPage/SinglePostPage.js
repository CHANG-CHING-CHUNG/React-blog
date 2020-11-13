import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useParams } from "react-router-dom";
import { getPost } from "../../WebApi";

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  border-bottom: px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const PostTitle = styled.div`
  font-size: 24px;
  color: #333;
  text-decoration: none;
`;

const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

const PostBody = styled.div``;

SinglePostPage.propTypes = {
  post: PropTypes.object,
};

export default function SinglePostPage() {
  let { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost(id).then((post) => setPost(post));
  }, []);

  return (
    <Root>
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
        <PostBody>{post.body}</PostBody>
      </PostContainer>
    </Root>
  );
}
