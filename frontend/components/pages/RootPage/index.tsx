import * as React from 'react';
import { Link } from 'react-router-dom';
import HeaderTemplate from '@frontend/components/templates/HeaderTemplate';

const RootPage: React.FC = () => {
  return (
    <HeaderTemplate>
      <ul>
        <li>
          <Link to="/qitta">Qitta記事一覧ページ</Link>
        </li>
        <li>
          <Link to="signup">新規登録画面</Link>
        </li>
      </ul>
    </HeaderTemplate>
  );
};

export default RootPage;
