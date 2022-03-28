import styled from "styled-components";
import DefaultImage from "../../Image";
import DefaultRow from "../../dumbs/Row";
import { ReactComponent as DotsSvg } from "../../../assets/dots.svg";
import { ReactComponent as HeartSvg } from "../../../assets/heart.svg";
import { ReactComponent as BalloonSvg } from "../../../assets/balloon.svg";
import { ReactComponent as SendSvg } from "../../../assets/send.svg";
import { ReactComponent as SaveSvg } from "../../../assets/save.svg";

export const Container = styled.article`
  border: 1px solid #dbdbdb;
  width: 614px;
  margin-bottom: 24px;
`;

export const SpacedRow = styled(DefaultRow)`
  justify-content: space-between;
  width: 100%;
`;

export const FirstRow = styled(SpacedRow)`
  padding: 14px 0 14px 16px;
`;

export const PostImage = styled(DefaultImage)`
  width: 100%;
  height: auto;
`;

export const Picture = styled(DefaultImage)`
  height: 42px;
  width: 42px;
  border-radius: 100%;
  margin-right: 14px;
`;

export const Icon = styled(DefaultImage)``;

export const Dots = styled(DotsSvg)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const Heart = styled(HeartSvg)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const Balloon = styled(BalloonSvg)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const Send = styled(SendSvg)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const Save = styled(SaveSvg)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 4px;
`;

export const Name = styled.span`
  white-space: nowrap;
  font-weight: bold;
`;

export const PastTime = styled.span`
  color: #8e8e8e;
  text-transform: uppercase;
  font-size: 12px;
`;

export const Profile = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
`;

export const Icons = styled.div`
  display: flex;
`;

export const Footer = styled.footer`
  padding: 0 16px 16px 16px;
`;
