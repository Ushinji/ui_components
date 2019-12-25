import * as React from 'react';
import styled from 'styled-components';
import { QittaItem } from '@server/apiClient/qittaClient';
import colors from '@frontend/components/styles/colors';
import Loading from '@frontend/components/atoms/Loading';

const { useState, useCallback } = React;

const Container = styled.ul`
  list-style: none;
  margin: 0 32px 0 0;
  padding: 0;
  width: 600px;
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

const useQittaItemList = (onFetchNext: () => Promise<void>) => {
  const [nextLoading, setNextLoading] = useState(false);
  const onNextPageClick = useCallback(async () => {
    setNextLoading(true);
    await onFetchNext();
    setNextLoading(false);
  }, [onFetchNext]);

  return { onNextPageClick, nextLoading };
};

type Props = {
  isLoading: boolean;
  isError: boolean;
  qittaItemList: QittaItem[];
  onFetchNext: () => Promise<void>;
};

const QittaItemList: React.FC<Props> = ({
  isLoading,
  isError,
  qittaItemList,
  onFetchNext,
}) => {
  const { onNextPageClick, nextLoading } = useQittaItemList(onFetchNext);

  if (isLoading) {
    return (
      <Container>
        <h2>記事一覧</h2>
        <Loading />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <h2>記事一覧</h2>
        <div>サーバー接続に失敗しました。</div>
      </Container>
    );
  }

  if (qittaItemList.length === 0) {
    return (
      <Container>
        <h2>記事一覧</h2>
        <div>現在、表示できる記事はありません。</div>
      </Container>
    );
  }

  return (
    <Container>
      <h2>記事一覧</h2>
      {qittaItemList.map((item, idx) => {
        const key = `qitta-item-${idx}`;
        return (
          <Item key={key}>
            <AncharLink href={item.url}>{item.title}</AncharLink>
          </Item>
        );
      })}
      {nextLoading ? (
        <Loading />
      ) : (
        <button type="button" onClick={() => onNextPageClick()}>
          次へ
        </button>
      )}
    </Container>
  );
};

export default QittaItemList;
