export function scrollTo(element, distance, duration) {
  if (duration <= 0) return;
  let difference = distance - element.scrollTop;
  let  perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === distance) return;
    scrollTo(element, distance, duration - 10);
}, 10);
}