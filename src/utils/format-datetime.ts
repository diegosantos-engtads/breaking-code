import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const getFormattedDate = (rawDate: string): string => {
  const date = new Date(rawDate);
  const now = new Date();
  const diffiInMs = now.getTime() - date.getTime();
  const diffiInHours = diffiInMs / (1000 * 60 * 60);

  return diffiInHours < 24
    ? formatRelativeDate(rawDate)
    : formatDateTime(rawDate);
};

const formatDateTime = (rawDate: string): string => {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
};

export const formatRelativeDate = (rawDate: string): string => {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
};
