import styled, { css } from "styled-components";
import Link from "next/link";

import { Main } from "./styles";

import queryString from 'query-string';

import React, {
  useState,
} from "react";

import {
  BoxShadowStyle,
  BubbleHeadStyle,
  SectionHeader,
  SectionHr,
  TextSansStyle,
  EventP,
} from "./styles";

import {
  LoadingOverlay,
  Wrap,
} from "./talk/styles";

const Header = styled.h1`
  display: inline-block;
  margin: 40px 0;

  font-size: 20px;
  font-weight: 500;
  line-height: 2.5;

  hr {
    width: 70%;
    margin: 0 auto;
    border: 0;
    border-top: 1px solid #ccc;
  }

  small {
    font-size: 15px;
  }
`;

const LinkWrap = styled.p`
  a:link,
  a:visited,
  a:hover {
    text-decoration: underline;
  }
`;

export const Highlight = styled.span`
  background: linear-gradient(
    0deg,
    transparent 33%,
    rgba(255, 136, 170, 0.2) 36%,
    rgba(255, 136, 170, 0.2) 60%,
    transparent 70%
  );
`;

export const RsvpButton = styled.input<{ kind: string }>`
  display: block;
  width: 90%;
  height: 44px;
  border-radius: 8px;
  border: 0;
  margin: 4px auto 0;

  text-align: center;
  font-size: 16px;
  font-weight: 900;
  color: white;
  outline: none;

  ${({ kind }) => {
    if (kind == "yes") {
      return css`
        background: #B5D9AF;
      `
    } else if (kind == 'no') {
      return css`
        background: #F0CAD3;
      `
    } else {
      return css`
        background: #F7D2B4;
      `
    }
  }
}`;

import { useRouter } from 'next/router'


const Meeting = () => {

  const router = useRouter()
  const userId = router.query.id as string

  let name = "";
  let oppositeName = "";
  let oppositeDrink = "";
  let oppositeNumber = "";


  return (
    <Main>
      <Header>
      김민하  ♡ 이준영
      <hr />
      <small>결혼식 소개팅 이벤트</small>
      </Header>

      <EventP>
        잘못된 페이지입니다.
      </EventP>
    </Main>
  )
  

  var curr = new Date();
  const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;  //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
  const today = new Date(utc + (KR_TIME_DIFF));

  if (today.getFullYear() >= 2022 && (today.getMonth() + 1) >= 9 && today.getDate() >= 25 && today.getHours() >= 15) {
    return (
      <Main>
        <Header>
        김민하  ♡ 이준영
        <hr />
        <small>결혼식 소개팅 이벤트</small>
        </Header>

        <EventP>
          {name}님, 안녕하세요.
          <br />
          <br/>
          당신의 매칭 상대는 {oppositeName}님입니다.
          <br />
          전화번호는 {oppositeNumber} 입니다.
          <br />
          <br />
          {oppositeName}님은 이런 것들을 좋아하신대요🙈
          <br />
          {oppositeDrink}
          <br />
          <br />
          그럼, 즐거운 시간 되세요 💕
        </EventP>
      </Main>
    );
  } else {
    return (
      <Main>
        <Header>
        김민하  ♡ 이준영
        <hr />
        <small>결혼식 소개팅 이벤트</small>
        </Header>

        <EventP>
          {name}님, 안녕하세요.
          <br/>
          저희 부부가 운영하는 소개팅 이벤트에
          <br/>
          참여해주셔서 감사합니다.
          <br/>
          <br />
          매칭된 상대의 연락처는 이 페이지에서
          <br/>
          9월 25일 오후 3시 이후에
          <br/>
          확인하실 수 있습니다.
          <br />
          9월 25일 3시 이후에 다시 방문 부탁드립니다!
          <br/>
          <br />
          꼭 상대방과 술집 혹은 카페를 방문해주세요 🙈
          <br />
          여러분들의 설렘과 기쁨이
          <br />
          저희 부부의 행복입니다.
          <br />
          <br/>
          그럼, 두근두근한 소개팅 되세요 💕
        </EventP>
      </Main>
    )

  }
};

export default Meeting;
