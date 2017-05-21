import React from 'react';

import { getMovies, favs } from '../api';
import LoMo from '../components/LoMo';

import '../res/fav-scene.less';


export default class FavScene extends React.Component {
  constructor(args) {
    super(...args);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const data = await getMovies();
    this.setState({
      data
    });
  }

  async handleMoClick(movie) {
    const user = this.props.user;
    if (!user.favs) {
      user.favs = [];
    }
    if (user.favs.indexOf(movie.id) === -1) {
      movie.selected = true;
      user.favs.push(movie.id);
    } else {
      movie.selected = false;
      user.favs.splice(user.favs.indexOf(movie.id), 1);
    }
    await favs(user.favs);
    this.forceUpdate();
  }

  handleNextButtonClick() {
    if (this.props.nextStep) {
      this.props.nextStep();
    }
  }

  render() {
    const user = this.props.user;
    if (!user.favs) {
      user.favs = [];
    }
    const favs = user.favs;
    return (
      <div className="fav-scene ocn-scene">
        <div className="fix-top">
          <h4>请挑选出你最喜欢的3部电影，当然多多益善哦~</h4>
          <button className={favs.length >= 3 ? 'success button full' : 'default button full'} onClick={e => this.handleNextButtonClick()}>{favs.length >= 3 ? '我选好了' : `还差 ${3 - favs.length} 部`}</button>
        </div>
        <LoMo data={this.state.data} onMoClick={e => this.handleMoClick(e)} />
      </div>
    );
  }
}
