import styled, { keyframes } from 'styled-components';
import NamPic from './nam-pic.png';

export const Subtext = styled.header`
	font-size: 1.8em;
	text-align: center;
	line-height: 1.15em;
	letter-spacing: 0;
	font-weight: 400;
	color: #d9daca;
	z-index: 1000;
	min-height: 40%;
	margin: 10px;
`;

const keyframeBlink = keyframes`
		0%, 100% {	color: #908893 }
		50% { color: #fff }
`
export const Blinker = styled.span `
	animation: 2s ease-in-out infinite ${keyframeBlink};
`;

export const BrandSupport = styled.div`
	line - height: 1.6em;
	color: #908893;
	font-weight: 300;
	letter-spacing: 1px;
	text-align: center;
	font-size: 1.5rem;
	z-index: 1000
`;

export const Subtle = styled.small`
	font-size: .9em;
	color: #1b0c0c;
`

export const NamImage = styled.div`
		background-image: url(${NamPic});
		height: 100px;
		width: 100px;
		background-position: 58% 45%;
		border-radius: 50px;
		background-size: 170%;
		margin: auto;
`