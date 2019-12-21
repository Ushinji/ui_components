import * as React from 'react';
import HeaderTemplate from '@frontend/components/templates/HeaderTemplate';
import { getQittaItems } from '@frontend/queries/qittaQuery';
import { QittaItem } from '@server/apiClient/qittaClient';
import QittaItemList from '@frontend/components/organisms/QittaItemList';

const { useState } = React;

type ResponseQittaItemList = {
  loading: boolean;
  error: boolean;
  items?: QittaItem[];
};

const useQittaItemList = () => {
  const [state, setState] = useState<ResponseQittaItemList>({
    loading: true,
    error: false,
    items: undefined,
  });

  const fetchData = React.useCallback(async () => {
    const res = await getQittaItems();
    if (res.status >= 400) {
      setState({
        loading: false,
        error: true,
      });
    }
    const items = res.data as QittaItem[];
    setState({
      loading: false,
      error: false,
      items,
    });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state };
};

const QittaItemListPage: React.FC = () => {
  const { loading, error, items } = useQittaItemList();

  if (loading) {
    return (
      <HeaderTemplate>
        <h1>Qitta記事一覧</h1>
        <div>Now Loading...</div>
      </HeaderTemplate>
    );
  }

  if (error || !items) {
    return (
      <HeaderTemplate>
        <h1>Qitta記事一覧</h1>
        <div>サーバー接続に失敗しました。</div>
      </HeaderTemplate>
    );
  }

  return (
    <HeaderTemplate>
      <h1>Qitta記事一覧</h1>
      <QittaItemList qittaItemList={items} />
    </HeaderTemplate>
  );
};

export default QittaItemListPage;
