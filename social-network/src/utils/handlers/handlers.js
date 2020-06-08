export const dateHandler = dateStr => {
  console.log(dateStr);
  const date = new Date(dateStr);
  const dateOptions = {
    timezone: 'UTC',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleString('eng', dateOptions);
};

export const stringSpaceHandler = string => {
  return string.split(/(?=[A-Z])/).join(' ');
};
