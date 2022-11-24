import { Notify } from 'quasar';

const showAlert = {
  success: (message: string, progress = false) => {
    Notify.create({
      position: 'top',
      color: 'positive',
      message: message,
      progress: progress,
      timeout: 2000,
    });
  },
  info: (message: string, progress = false) => {
    Notify.create({
      position: 'top',
      color: 'info',
      message: message,
      progress: progress,
      timeout: 2000,
    });
  },
  warning: (message: string, progress = false) => {
    Notify.create({
      position: 'top',
      color: 'warning',
      message: message,
      progress: progress,
      timeout: 2000,
    });
  },
  error: (message: string, progress = false) => {
    Notify.create({
      position: 'top',
      color: 'negative',
      message: message,
      progress: progress,
      timeout: 2000,
    });
  },
};

export default showAlert;
