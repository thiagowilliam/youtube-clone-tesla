import React from 'react';

import { useTransform } from 'framer-motion';
import useWrapperScroll from '../Model/useWrapperScroll';

import * as S from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  return (
    <S.Container>
      <S.Header>
        <S.Logo />
        <S.Burger />
      </S.Header>

      <S.Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="/">UI Clone</a>
          </li>
          <li>
            <a href="/">Made with love</a>
          </li>
          <li>
            <a href="/">by Thiago William</a>
          </li>
        </ul>
      </S.Footer>
    </S.Container>
  );
};

export default UniqueOverlay;
