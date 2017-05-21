import React from 'react';

import { getUser } from '../api';
import BindTvScene from '../scn/BindTvScene';
import MainScene from '../scn/MainScene';

import FavScene from '../scn/FavScene';

export default class HomeApp extends React.Component {
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
    if (!user) {
      return null;
    }
    return (
      <div className="scene-container">
        {this.renderScene(user)}
      </div>
    );
  }

  renderScene(user) {
    if (!user.ocnId) {
      return (
        <BindTvScene user={user} nextStep={() => this.forceUpdate()} />
      );
    } else {
      if (user.favs && user.favs.length >= 3) {
        document.body.scrollTop = 0;
        return (
          <MainScene user={user} />
        );
      } else {
        return (
          <FavScene user={user} nextStep={() => this.forceUpdate()} />
        );
      }
    }
  }
}
