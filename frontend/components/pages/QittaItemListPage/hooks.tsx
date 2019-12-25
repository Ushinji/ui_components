import * as React from 'react';
import { getQittaItems, getQittaTags } from '@frontend/queries/qittaQuery';
import { QittaItem, QittaTag } from '@server/apiClient/qittaClient';

const { useState, useCallback, useEffect } = React;

type QittaItemListState = {
  isLoading: boolean;
  isError: boolean;
  items: QittaItem[];
  page: number;
};

export const useQittaItemList = () => {
  const [state, setState] = useState<QittaItemListState>({
    isLoading: true,
    isError: false,
    items: [],
    page: 1,
  });

  const fetchItems = useCallback(async () => {
    const res = await getQittaItems();
    if (res.status >= 400) {
      setState(prevState => {
        return { ...prevState, isLoading: false, isError: true };
      });
    }
    const items = res.data as QittaItem[];
    setState(prevState => {
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        items,
      };
    });
  }, []);

  const fetchNextItems = useCallback(async () => {
    const res = await getQittaItems(state.page + 1);
    if (res.status >= 400) {
      setState(prevState => {
        return { ...prevState, isLoading: false, isError: true };
      });
    }
    const items = res.data as QittaItem[];
    setState(prevState => {
      return {
        isLoading: false,
        isError: false,
        page: state.page + 1,
        items: prevState.items.concat(items),
      };
    });
  }, [state.page]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return { fetchNextItems, ...state };
};

type ResponseQittaTagList = {
  isLoading: boolean;
  isError: boolean;
  tags?: QittaTag[];
};

export const useQittaTagList = () => {
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
