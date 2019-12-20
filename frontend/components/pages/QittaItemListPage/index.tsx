import * as React from 'react';
import HeaderTemplate from '@frontend/components/templates/HeaderTemplate';
import { getQittaItems } from '@frontend/queries/qittaQuery';
import { QittaItem } from '@server/apiClient/qittaClient';
import QittaItemList from '@frontend/components/organisms/QittaItemList';

const { useState } = React;

const useQittaItemList = () => {
  const [qittaItemList, setQittaItemList] = useState<QittaItem[]>([]);

  const fetchData = async () => {
    const res = await getQittaItems();
    setQittaItemList(res);
  };

  React.useEffect(() => {
    fetchData();
  });

  return { qittaItemList };
};

const QittaItemListPage: React.FC = () => {
  const { qittaItemList } = useQittaItemList();
  return (
    <HeaderTemplate>
      <h1>Qitta記事一覧</h1>
      <QittaItemList qittaItemList={qittaItemList} />
    </HeaderTemplate>
  );
};

export default QittaItemListPage;
