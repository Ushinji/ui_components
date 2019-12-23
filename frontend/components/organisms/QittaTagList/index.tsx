import * as React from 'react';
import styled from 'styled-components';
import { QittaTag } from '@server/apiClient/qittaClient';
import colors from '@frontend/components/styles/colors';
import Loading from '@frontend/components/atoms/Loading';

const Container = styled.ul`
  width: 200px;
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

type Props = {
  isLoading: boolean;
  isError: boolean;
  qittaTagList: QittaTag[];
};

const QittaTagList: React.FC<Props> = ({
  isLoading,
  isError,
  qittaTagList,
}) => {
  if (isLoading) {
    return (
      <Container>
        <h2>タグ一覧</h2>
        <Loading />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <h2>タグ一覧</h2>
        <div>サーバー接続に失敗しました。</div>
      </Container>
    );
  }

  if (qittaTagList.length === 0) {
    return (
      <Container>
        <h2>タグ一覧</h2>
        <div>現在、表示できるタグはありません。</div>
      </Container>
    );
  }

  return (
    <Container>
      <h2>タグ一覧</h2>
      {qittaTagList.map((tag, idx) => {
        const key = `qitta-item-${idx}`;
        return (
          <Item key={key}>
            <div>{tag.id}</div>
            <div>{tag.items_count}</div>
            <div>{tag.followers_count}</div>
          </Item>
        );
      })}
    </Container>
  );
};

export default QittaTagList;
