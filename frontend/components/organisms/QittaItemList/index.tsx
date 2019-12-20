import * as React from 'react';
import { QittaItem } from '@server/apiClient/qittaClient';

type Props = {
  qittaItemList: QittaItem[];
};

const QittaItemList: React.FC<Props> = ({ qittaItemList }) => {
  return (
    <ul>
      {qittaItemList.map((item, idx) => {
        const key = `qitta-item-${idx}`;
        return <li key={key}>{item.title}</li>;
      })}
    </ul>
  );
};

export default QittaItemList;
