import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import RootPage from '@frontend/components/pages/RootPage';
import QittaItemListPage from '@frontend/components/pages/QittaItemListPage';

type State = {
  hasError: boolean;
};

class Routes extends React.Component<{}, State> {
  constructor(props = {}) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error | null, info: object) {
    console.log(error); // eslint-disable-line no-console
    console.log(info); // eslint-disable-line no-console
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Error</div>;
    }

    return (
      <Switch>
        <Route exact path="/" component={RootPage} />
        <Route exact path="/qitta" component={QittaItemListPage} />
      </Switch>
    );
  }
}

export default Routes;
