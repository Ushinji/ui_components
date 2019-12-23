import * as React from 'react';
import HeaderTemplate from '@frontend/components/templates/HeaderTemplate';
import { getQittaItems, getQittaTags } from '@frontend/queries/qittaQuery';
import { QittaItem, QittaTag } from '@server/apiClient/qittaClient';
import QittaItemList from '@frontend/components/organisms/QittaItemList';
import QittaTagList from '@frontend/components/organisms/QittaTagList';
import styled from 'styled-components';

const { useState } = React;

const Container = styled.div``;

const Body = styled.div`
  display: flex;
`;

type ResponseQittaItemList = {
  isLoading: boolean;
  isError: boolean;
  items?: QittaItem[];
};

const useQittaItemList = () => {
  const [state, setState] = useState<ResponseQittaItemList>({
    isLoading: true,
    isError: false,
    items: undefined,
  });

  const fetchData = React.useCallback(async () => {
    const res = await getQittaItems();
    if (res.status >= 400) {
      setState({
        isLoading: false,
        isError: true,
      });
    }
    const items = res.data as QittaItem[];
    setState({
      isLoading: false,
      isError: false,
      items,
    });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state };
};

type ResponseQittaTagList = {
  isLoading: boolean;
  isError: boolean;
  tags?: QittaTag[];
};

const useQittaTagList = () => {
  const [state, setState] = useState<ResponseQittaTagList>({
    isLoading: true,
    isError: false,
    tags: undefined,
  });

  const fetchData = React.useCallback(async () => {
    const res = await getQittaTags();
    if (res.status >= 400) {
      setState({
        isLoading: false,
        isError: true,
      });
    }
    const tags = res.data as QittaTag[];
    setState({
      isLoading: false,
      isError: false,
      tags,
    });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state };
};

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
