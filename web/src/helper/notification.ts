import { QNotifyCreateOptions } from 'quasar';

const setNotification = (message: string, isSuccess: boolean = true) => {
  return {
    color: isSuccess ? 'green-4' : 'red-4',
    textColor: 'white',
    icon: isSuccess ? 'check_circle' : 'highlight_off',
    message: message,
    position: 'top',
  } as QNotifyCreateOptions;
};

export default setNotification;
