function formatTime(time){
    const now = Date.now();
    const s = Math.round((now - time) / 1000);

    if(s <= 15) return  'Just now';

    if (s <= 59) return s + 's ago';

    const min = (s - s % 60) / 60;
    if (min <= 59) return min + 'min ago';

    const h = (s - s % 60 - min % 60 * 60) / 60 / 60;
    if (h <= 23) return h + 'h ago';

    const d = Math.floor(h / 24);
    if (d <= 30) return d + 'd ago';

    const w = Math.floor(d / 7);
    if (w <= 4) return w + 'w ago';

    const m = Math.floor(d / 30);
    if (m <= 11) return m + 'm ago';

    const y = Math.floor(d / 365.25);
    return y + 'y ago';

}

export default formatTime;