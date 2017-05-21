import React from 'react';

import { getMovieClusters } from '../api';
import LoLoMo from '../components/LoLoMo';

import '../res/main-scene.less';


export default class MainScene extends React.Component {
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
    const data = await getMovieClusters();
    this.setState({
      data
    });
  }

  handleMoClick(e) {
    location.href = `/detail.html?id=${e.id}`;
  }

  render() {
    return (
      <div className="ocn-main-scene ocn-scene">
        <LoLoMo data={this.state.data} onMoClick={e => this.handleMoClick(e)} />
      </div>
    );
  }
}
