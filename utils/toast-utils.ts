import toast from 'react-hot-toast';

export const showSuccessToast = (message: string): void => {
  toast.success(message, {
    duration: 3000,
    style: {
      background: '#4caf50',
      color: '#fff',
    },
  });
};

export const showErrorToast = (message: string): void => {
  toast.error(message, {
    duration: 3000,
    style: {
      background: '#d32f2f',
      color: '#fff',
    },
  });
};

export const showLoadingToast = (message: string): string | undefined => toast.loading(message);

export const dismissToast = (toastId: string): void => {
  toast.dismiss(toastId);
};
