import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StarScore } from '@/components';
import './index.scss';

class HomeList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'GET_HOME_LIST'
    });
  }

  renderBrand(item) {
    if (item.brand_type) {
      return (<div className="brand brand-pin">品牌</div>);
    }
    return (<div className="brand brand-xin">新到</div>);
  }

  renderMonthSaleNum(monthSaleNum) {
    if (monthSaleNum > 999) {
      return '月售999+';
    }
    return `月售${monthSaleNum}`;
  }

  renderMeituanFlag(deliveryType) {
    if (deliveryType === 1) {
      return (<div className="item-meituan-flag">美团专送</div>);
    }
    return null;
  }

  renderOther(discounts) {
    return discounts.map(item => (
      <div className="item-other" key={item.id}>
        <img className="other-tag" alt="" src={item.icon_url} />
        <div className="other-desc">{item.info}</div>
      </div>
    ));
  }

  renderItems() {
    const { homeList } = this.props;
    return homeList.map(item => (
      <div className="list-item scale-1px" key={item.mt_poi_id}>
        <img className="item-image" alt="" src={item.pic_url} />
        {this.renderBrand(item)}
        <div className="item-info">
          <div className="item-title">{item.name}</div>
          <div className="item-content clearfix">
            <div className="content-score clearfix">{<StarScore score={item.wm_poi_score} />}</div>
            <div className="content-month-sale-num">{this.renderMonthSaleNum(item.month_sale_num)}</div>
            <div className="content-distance">&nbsp;{item.distance}</div>
            <div className="content-delivery-time">{item.mt_delivery_time}&nbsp;|</div>
          </div>
          <div className="item-price clearfix">
            <div className="price-min-tip">{item.min_price_tip}&nbsp;|</div>
            <div className="price-delivery-time">&nbsp;{item.mt_delivery_time}</div>
            {this.renderMeituanFlag(item.delivery_type)}
          </div>
          {this.renderOther(item.discounts2)}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="home-list">
        <div className="list-title">
          <span className="title-line" />
          <span>附近商家</span>
          <span className="title-line" />
        </div>
        {this.renderItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeList: state.homeListReducer.homeList
  };
}

export default connect(mapStateToProps)(HomeList);
