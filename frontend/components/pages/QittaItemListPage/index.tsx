import * as React from 'react';
import styled from 'styled-components';
import HeaderTemplate from '@frontend/components/templates/HeaderTemplate';
import QittaItemList from '@frontend/components/organisms/QittaItemList';
import QittaTagList from '@frontend/components/organisms/QittaTagList';
import { useQittaItemList, useQittaTagList } from './hooks';

const Container = styled.div``;

const Body = styled.div`
  display: flex;
`;

const QittaItemListPage: React.FC = () => {
  const {
    isLoading: isItemsLoading,
    isError: isItemsError,
    items,
  } = useQittaItemList();
  const {
    isLoading: isTagsLoading,
    isError: isTagsError,
    tags,
  } = useQittaTagList();

  return (
    <HeaderTemplate>
      <Container>
        <h1>Qitta情報</h1>
        <Body>
          <QittaItemList
            isLoading={isItemsLoading}
            isError={isItemsError || !items}
            qittaItemList={items || []}
          />
          <QittaTagList
            isLoading={isTagsLoading}
            isError={isTagsError || !tags}
            qittaTagList={tags || []}
          />
        </Body>
      </Container>
    </HeaderTemplate>
  );
};

export default QittaItemListPage;
