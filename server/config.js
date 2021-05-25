/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1,
    title: "",
    text: "特别奖"
  },
  // {
  //   type: 1,
  //   count: 2,
  //   text: "特等奖",
  //   title: "神秘大礼",
  //   img: "../img/secrit.jpg"
  // },
  {
    type: 2,
    count: 1,
    text: "一等奖",
    title: "电动摩托车",
    img: "../img/motuoche.jpg"
  },
  {
    type: 3,
    count: 3,
    text: "二等奖",
    title: "格兰仕微波炉",
    img: "../img/weibolu.jpg"
  },
  {
    type: 4,
    count: 8,
    text: "三等奖",
    title: "拉杆箱",
    img: "../img/laganxiang.jpg"
  },
  {
    type: 5,
    count: 12,
    text: "幸运奖",
    title: "儿童全棉夏凉被",
    img: "../img/mianbei.jpg"
  },
  // {
  //   type: 6,
  //   count: 8,
  //   text: "五等奖",
  //   title: "Kindle",
  //   img: "../img/kindle.jpg"
  // },
  // {
  //   type: 7,
  //   count: 11,
  //   text: "六等奖",
  //   title: "漫步者蓝牙耳机",
  //   img: "../img/edifier.jpg"
  // }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 3, 8, 12, 8, 9, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "竹蜻蜓";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
