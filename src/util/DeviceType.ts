

export const getDeviceType = () => {
    const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;

    if (/mobile/i.test(userAgent)) {
        return 'Mobile';
    }

    if (/tablet/i.test(userAgent) || (/(iPad|PlayBook)/.test(userAgent) || (/Android/.test(userAgent) && !/Mobile/.test(userAgent)))) {
        return 'Tablet';
    }

    if (/iPad|Macintosh/.test(userAgent) && 'ontouchend' in document) {
        return 'Tablet';
    }

    return 'Desktop';
};

