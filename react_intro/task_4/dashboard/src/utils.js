const getFullYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) => 
  isIndex ? 'Holberton School' : 'Holberton School main dashboard';

function checkIsIndex() {
  // checks whether you are on index
  const pathname = window.location.pathname;
  const isIndex = pathname.endsWith("/");
  return isIndex;
}

const getLatestNotification = () =>
  '<strong>Urgent requirement</strong> - complete by EOD';

export { getFullYear, getFooterCopy, checkIsIndex, getLatestNotification };
