import React from 'react';

import { getUser } from '../../api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.initialLoad();
  }

  async initialLoad() {
    const user = await getUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <img src={user ? user.headimgurl : ''} alt="" width="50%" />
        <h1>{user ? user.nickname : ''}</h1>
      </div>
    );
  }
}
