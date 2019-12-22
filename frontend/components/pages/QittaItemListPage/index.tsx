import * as React from 'react';
import HeaderTemplate from '@frontend/components/templates/HeaderTemplate';
import { getQittaItems } from '@frontend/queries/qittaQuery';
import { QittaItem } from '@server/apiClient/qittaClient';
import QittaItemList from '@frontend/components/organisms/QittaItemList';

const { useState } = React;

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

const QittaItemListPage: React.FC = () => {
  const { isLoading, isError, items } = useQittaItemList();

  return (
    <HeaderTemplate>
      <h1>Qitta記事一覧</h1>
      <QittaItemList
        isLoading={isLoading}
        isError={isError || !items}
        qittaItemList={items || []}
      />
    </HeaderTemplate>
  );
};

export default QittaItemListPage;
