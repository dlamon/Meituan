import React, { PureComponent } from 'react';
import './index.scss';

class StarScore extends PureComponent {
  renderStars() {
    const { score } = this.props;
    const fullStar = parseInt(score, 10);
    const halfStar = (score - fullStar) >= 0.5 ? 1 : 0;
    const nullStar = 5 - fullStar - halfStar;
    console.log('fullStar', fullStar);
    console.log('halfStar', halfStar);
    console.log('nullStar', nullStar);

    const stars = [];

    for (let i = 0; i < fullStar; i += 1) {
      stars.push(<div className="star fullstar" />);
    }

    for (let i = 0; i < halfStar; i += 1) {
      stars.push(<div className="star halfstar" />);
    }

    for (let i = 0; i < nullStar; i += 1) {
      stars.push(<div className="star nullstar" />);
    }
    return stars;
  }

  render() {
    return (
      <div className="star-score">
        {this.renderStars()}
      </div>
    );
  }
}

export default StarScore;
