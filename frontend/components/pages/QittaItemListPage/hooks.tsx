import * as React from 'react';
import { getQittaItems, getQittaTags } from '@frontend/queries/qittaQuery';
import { QittaItem, QittaTag } from '@server/apiClient/qittaClient';

const { useState, useCallback, useEffect } = React;

type ResponseQittaItemList = {
  isLoading: boolean;
  isError: boolean;
  items?: QittaItem[];
};

export const useQittaItemList = () => {
  const [state, setState] = useState<ResponseQittaItemList>({
    isLoading: true,
    isError: false,
    items: undefined,
  });

  const fetchData = useCallback(async () => {
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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state };
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
