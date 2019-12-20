import * as React from 'react';
import HeaderTemplate from '@frontend/components/templates/HeaderTemplate';
import { getQittaItems } from '@frontend/queries/qittaQuery';
import { QittaItem } from '@server/apiClient/qittaClient';

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
      <ul>
        {qittaItemList.map((item, idx) => {
          const key = `qitta-item-${idx}`;
          return <li key={key}>{item.title}</li>;
        })}
      </ul>
    </HeaderTemplate>
  );
};

export default QittaItemListPage;
