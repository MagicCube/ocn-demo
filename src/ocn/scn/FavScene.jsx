import React from 'react';

import { getMovies } from '../api';
import LoMo from '../components/LoLoMo';

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

  render() {
    return (
      <div className="fav-scene ocn-scene">
        <LoMo data={this.state.data} />
      </div>
    );
  }
}
