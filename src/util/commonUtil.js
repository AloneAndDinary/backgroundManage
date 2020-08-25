// 获取对应的localStrong
export function getLocalItem(key) {
  return localStorage.getItem(key);
}
// 设置对应得localStrong
export function setLocalItem(key, value) {
  localStorage.setItem(key, value);
}
// 移除对应得localStrong
export function removeLocalItem(key) {
  localStorage.removeItem(key);
}
