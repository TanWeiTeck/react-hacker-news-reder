export const formatDate = (time) => {
    return new Date(time * 1000).toLocaleDateString('en-MY', {
        hour: 'numeric',
        minute: 'numeric',
    });
};
