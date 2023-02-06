import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale(`ja`);

export function getFormattedDate(date: Date): string {
  return dayjs(date).format('YYYY/MM/DD');
}
