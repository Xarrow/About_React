import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { getRuWeiboResponse } from '../utils/index';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

class MyGallery extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }
  componentDidMount() {
    getRuWeiboResponse().then((res) => {
      const posts = res.data.cards.filter(
        item => item !== undefined && item.mblog.original_pic !== undefined);
      this.setState({ posts });
    });
  }
  openGellery(imgSrc) {
    const items = [
      {
        src: imgSrc,
        w: 0,
        h: 0,
      },
    ];
    const pswpElement = this.pswpElement;
    const options = { index: 0 };
    this.gallery = new PhotoSwipe(pswpElement, PhotoswipeUIDefault, items, options);
    this.gallery.listen('gettingData', (index, item) => {
      const _this = this;
      if (item.w < 1 || item.h < 1) { // unknown size
        const img = new Image();
        img.onload = function () { // will get size after load
          item.w = this.width; // set image width
          item.h = this.height; // set image height
          _this.gallery.invalidateCurrItems(); // reinit Items
          _this.gallery.updateSize(true); // reinit Items
        };
        img.src = item.src; // let's download image
      }
    });
    this.gallery.init();
  }
  render() {
    // axios.get('/ru').then((res) => {
    //   const posts = res.data.cards.filter(
    //     item => item.mblog !== undefined && item.mblog.original_pic !== undefined);
    //   this.setState({ posts });
    // });
    // const imgs = [
    //   [
    //     'http://fmn.rrimg.com/fmn079/20150820/1240/original_58Ov_05b30002536d1e7f.jpg',
    //     'http://fmn.rrimg.com/fmn063/20150208/2145/original_2uPz_229200005e161190.jpg',
    //     'http://fmn.rrimg.com/fmn059/20141223/0820/xlarge_Kary_4ba80001becb125d.jpg',
    //     'http://fmn.rrimg.com/fmn061/20141216/2120/original_R6ga_678200006b10118c.jpg',
    //     'http://fmn.rrimg.com/fmn057/20140620/0700/original_iMjX_7c26000047e51260.jpg',
    //
    //   ],
    //   [
    //     'http://fmn.rrimg.com/fmn061/20140412/0825/large_KdUX_6d7800009e5d1190.jpg',
    //     'http://fmn.rrimg.com/fmn061/20140413/1455/original_Jbtj_20be00008e1e1260.jpg',
    //     'http://fmn.rrimg.com/fmn062/20140401/1555/original_XsFK_580b000001bd1191.jpg',
    //     'http://fmn.rrimg.com/fmn065/20140105/0840/original_baAO_08a10000cf18125f.jpg',
    //     'http://fmn.rrimg.com/fmn060/20140103/1935/original_ry3q_19d600009d351260.jpg',
    //
    //   ],
    //   [
    //     'http://fmn.rrimg.com/fmn058/20140214/1255/original_DFJp_4e560000421a1260.jpg',
    //     'http://fmn.rrimg.com/fmn062/20140214/1750/original_XzLU_4d8800004244118c.jpg',
    //     'http://fmn.rrimg.com/fmn056/20140223/1005/original_1r8f_6eb5000071c9125f.jpg',
    //     'http://fmn.rrimg.com/fmn058/20130628/1835/original_aXgc_11bd000088f6118f.jpg',
    //     'http://fmn.rrimg.com/fmn064/20141217/2155/large_4E8D_13bb000000171190.jpg',
    //   ],
    //   [
    //     'http://hdn.xnimg.cn/photos/hdn421/20161202/1640/h_large_QAM5_485900062878195a.jpg',
    //     'http://img.hb.aicdn.com/61dfa024c8040e6a5bcb03d42928fbcb0c87c1a54e731-yc4lvV_fw',
    //     'http://img.hb.aicdn.com/6783b4d7811ad7fb87b1446c5488b91179f7608118289-hpEyP3_fw',
    //     'http://img.hb.aicdn.com/7be61ba6bdb20a73be63edc387b16eec72d0bbb51c7ef-XafA07_fw',
    //     'http://img.hb.aicdn.com/bd3ba3f907fe098b911947e0020615b50fc340ed2df72-WsuHuM_fw',
    //   ],
    //   [
    //     'http://img.hb.aicdn.com/71471aaac95eade66400a390863b37c76d9addcd14982-0H6sak_fw',
    //     'http://img.hb.aicdn.com/cb16c68c4d3b7a08b5e91cd351f6b723634ca3fc27d4d-m1JD8z_fw',
    //     'http://img.hb.aicdn.com/e3559b6e8d7237857382050e5659a64cc0b7d696a2869-stcRXA_fw',
    //     'http://img.hb.aicdn.com/4ea229436fcf2077502953907a6afb16d3c5cd611b8e2-0dVIeH_fw',
    //     'http://img.hb.aicdn.com/98c786f4314736f95a42bf927bf65a82d305a532c6258-njI6id_fw',
    //   ],
    // ];
    const imgs = [
      [
        'http://img.hb.aicdn.com/1cad414972c5db2b8c1942289e3aeef37175006a8bb16-CBtjtX_fw',
        'http://img.hb.aicdn.com/016f2e13934397e17c3482a4529f3da1149d37fd2a99c-RVM1Gi_fw',
        'http://img.hb.aicdn.com/8c5d5f2bf6427d1b5ed8657a7ae0c9938d3465e367899-AJ0zVA_fw',
        'http://img.hb.aicdn.com/bd71ccac0b16bbcade255a1a8a63504d71c7dee9a8652-zBCN9d_fw',
        'http://img.hb.aicdn.com/37a40cb04345463858d45418ae6ed9ef319e30dc37a45-o4pQ0j_fw',

      ],
      [
        'http://img.hb.aicdn.com/5fad6c3a14a9b80c4448835bb6b23ab895d18e234eff3-BPGmox_fw',
        'http://img.hb.aicdn.com/a1a19de5dac212a646ba6967ef565786399fb1665bd04-EEvwzR_fw',
        'http://img.hb.aicdn.com/06595f8044e881de3a82d691768bc8c21a2a9f3633d60-XKjC2s_fw',
        'http://img.hb.aicdn.com/880787b36d45efbe05aa409c867db29a3028e02da7f9b-qxGib9_fw',
        'http://img.hb.aicdn.com/4964b97f6f6eb61a20922b40842adf0169c44e491c4b60-azX1S7_fw'
      ],
      [
        'http://img.hb.aicdn.com/ff97d00944edfc706c62dd5c0e955c4099a37b407534f-BcUqf0_fw',
        'http://img.hb.aicdn.com/0e22be22b08c6f78b94283b6cfa890093ac3cae8401e7-b1ftfi_fw',
        'http://img.hb.aicdn.com/879f870e15f7cc0847c8ae19a5fcbe974d5904bb181d7-RGmtNU_fw',
        'http://img.hb.aicdn.com/b4a8e62958555a97dc3de9ccb03284bf556c042925522-x50qGv_fw',
        'http://img.hb.aicdn.com/1ef493a15674e9fd523b248ea4ec43d2ea9ce6952ff3e-WavWKc_fw'
      ],
      [
        'http://img.hb.aicdn.com/8e16efec78ac4a3684fc8999d18e3661af40fd4510a25-DDvQON_fw',
        'http://img.hb.aicdn.com/61dfa024c8040e6a5bcb03d42928fbcb0c87c1a54e731-yc4lvV_fw',
        'http://img.hb.aicdn.com/6783b4d7811ad7fb87b1446c5488b91179f7608118289-hpEyP3_fw',
        'http://img.hb.aicdn.com/7be61ba6bdb20a73be63edc387b16eec72d0bbb51c7ef-XafA07_fw',
        'http://img.hb.aicdn.com/bd3ba3f907fe098b911947e0020615b50fc340ed2df72-WsuHuM_fw'
      ],
      [
        'http://img.hb.aicdn.com/71471aaac95eade66400a390863b37c76d9addcd14982-0H6sak_fw',
        'http://img.hb.aicdn.com/cb16c68c4d3b7a08b5e91cd351f6b723634ca3fc27d4d-m1JD8z_fw',
        'http://img.hb.aicdn.com/e3559b6e8d7237857382050e5659a64cc0b7d696a2869-stcRXA_fw',
        'http://img.hb.aicdn.com/4ea229436fcf2077502953907a6afb16d3c5cd611b8e2-0dVIeH_fw',
        'http://img.hb.aicdn.com/98c786f4314736f95a42bf927bf65a82d305a532c6258-njI6id_fw'
      ]
    ];

    const css = { padding: '20px' };

    // const imgsTag = [this.state.posts.map(item => (
    //   item.mblog.original_pic
    // ))].map(item => (
    //   item.map(v1 => (
    //     <Card bordered={false}>
    //       <div className="custom-img" onClick={() => this.openGellery(v1)}>
    //         <img alt="example" width="100%" src={v1} />
    //       </div>
    //       <div className="custom-card">
    //         <h3>Ant Design</h3>
    //         <p><a href={'https://ant.design/components/layout-cn/'} value={'https://ant.design/components/layout-cn/'}>
    //           https://ant.design
    //         </a> </p>
    //       </div>
    //     </Card>
    //   ))
    // ));

    const imgsTag = imgs.map(v1 => (
      v1.map(v2 => (
        <div className="gutter-box" style={{ padding: 5 }}>
          <Card bordered={false} bodyStyle={{ padding: 0 }}>
            <div className="custom-image" onClick={() => { this.openGellery(v2); }}>
              <img alt="example" width="100%" src={v2} />
            </div>
            <div className="custom-card">
              <h3>Ant Design</h3>
              <p>https://ant.design/</p>
            </div>
          </Card>
        </div>
      ))
    ));
    return (
      <div style={css}>

        <style>
          {`.custom-image img {
              display: block;
            }
            .custom-card {
              padding: 10px 16px;
            }
            .custom-card p {
              color: #999;
            }`}
        </style>
        <Row align="align" />
        <h1>图片</h1>
        <Row>
          <Col className="gutter-row" md={5}>{imgsTag[0]}</Col>
          <Col className="gutter-row" md={4}>{imgsTag[1]}</Col>
          <Col className="gutter-row" md={5}>{imgsTag[2]}</Col>
          <Col className="gutter-row" md={5}>{imgsTag[3]}</Col>
          <Col className="gutter-row" md={5}>{imgsTag[4]}</Col>
        </Row>

        <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={(div) => { this.pswpElement = div; }}>

          <div className="pswp__bg" />

          <div className="pswp__scroll-wrap">

            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>

            <div className="pswp__ui pswp__ui--hidden">

              <div className="pswp__top-bar">


                <div className="pswp__counter" />

                <button className="pswp__button pswp__button--close" title="Close (Esc)" />

                <button className="pswp__button pswp__button--share" title="Share" />

                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />

                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />

                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>

              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />

              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />

              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default MyGallery;