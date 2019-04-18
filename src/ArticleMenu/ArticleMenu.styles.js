import styled from 'styled-components';

export const ArticleItem = styled.div`
`

export const ArticleTrigger = styled.div`
	&&& {
		// vertical-align: top;
		// text-align: right;
		// display: inline;
		// position: absolute;
		// right: 20px;
		// top: 0;
	}
`

export const ArticleText = styled.span`
	text-transform: capitalize;
	font-size: 16px;
	line-height: 18px;
	display: inline;
	vertical-align: middle;
	font-weight: 400;
	width: 100%;
`

export const ArticleLink = styled.a`
	color: black;
	display: inline-block;
	width: 100%;
	height: 100%;
	text-align: left;

	&& {
		margin: 0 10px;
		margin-bottom: 4px;
		display: inline-table;
		color: black;
	}
`