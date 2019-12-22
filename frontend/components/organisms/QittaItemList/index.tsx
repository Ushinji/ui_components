import * as React from 'react';
import styled from 'styled-components';
import { QittaItem } from '@server/apiClient/qittaClient';
import colors from '@frontend/components/styles/colors';
import Loading from '@frontend/components/atoms/Loading';

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 16px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const AncharLink = styled.a`
  width: 100%;
  padding: 32px 16px;
  display: block;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: black;
  }
`;

type Props = {
  isLoading: boolean;
  isError: boolean;
  qittaItemList: QittaItem[];
};

const QittaItemList: React.FC<Props> = ({
  isLoading,
  isError,
  qittaItemList,
}) => {
  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  if (isError) {
    return <Container>サーバー接続に失敗しました。</Container>;
  }

  if (qittaItemList.length === 0) {
    return <Container>現在、表示できる記事はありません。</Container>;
  }

  return (
    <Container>
      {qittaItemList.map((item, idx) => {
        const key = `qitta-item-${idx}`;
        return (
          <Item key={key}>
            <AncharLink href={item.url}>{item.title}</AncharLink>
          </Item>
        );
      })}
    </Container>
  );
};

export default QittaItemList;
