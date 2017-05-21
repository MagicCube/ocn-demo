import React from 'react';

import { getMovie } from '../api';
import MoDetail from '../components/MoDetail';


export default class DetailApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.initialLoad();
  }

  async initialLoad() {
    const id = location.search.substr(4);
    const movie = await getMovie(id);
    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;
    if (!movie) {
      return null;
    }
    return (
      <MoDetail movie={movie} />
    );
  }
}
