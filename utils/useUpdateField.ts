type UpdateFieldArgs<T> = {
  id: string;
  key: string;
  value: unknown;
  updateFn: (
    params: { id: string; payload: Partial<T> },
    options?: {
      onSuccess?: (data: unknown) => void;
      onError?: (error: unknown) => void;
    },
  ) => void;
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
};

export const updateField = <T>({
  id,
  key,
  value,
  updateFn,
  onSuccess,
  onError,
}: UpdateFieldArgs<T>): void => {
  if (!key) return;

  updateFn(
    {
      id,
      payload: { [key]: value } as Partial<T>,
    },
    {
      onSuccess: (data: unknown) => {
        if (onSuccess) {
          onSuccess(data);
        }
      },
      onError: (error: unknown) => {
        if (onError) {
          onError(error);
        }
      },
    },
  );
};

export const resolveFieldValue = <T>(obj: T, pathOrKey: string): string => {
  const cleanedPath = pathOrKey.replace(/\?/g, '');

  const result = cleanedPath.split('.').reduce<unknown>((acc, key) => {
    if (typeof acc === 'object' && acc !== null && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);

  if (typeof result === 'string' || typeof result === 'number' || typeof result === 'boolean') {
    return String(result);
  }

  if (
    typeof result === 'object' &&
    result !== null &&
    '_id' in result &&
    ['string', 'number', 'boolean'].includes(typeof (result as { _id: unknown })._id)
  ) {
    return String((result as { _id: string | number | boolean })._id);
  }

  return '';
};
