export const dateHandler = dateStr => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date = new Date(dateStr.slice(-1) === 'Z' ? dateStr : dateStr + 'Z');
  const dateOptions = {
    timezone: timeZone,
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', dateOptions).format(date);
};

export const stringSpaceHandler = string => {
  return string.split(/(?=[A-Z])/).join(' ');
};
