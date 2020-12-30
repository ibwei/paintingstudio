/**
 * @methods 处理富文本内容,提取纯文本
 * @param richText {string}
 * @return  plainText {string}
 */
export function getSimpleText(html) {
  const re1 = new RegExp('<.+?>', 'g');// 匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
  const msg = html.replace(re1, '');// 执行替换成空字符
  return msg;
}
