import Papa from 'papaparse';
import dayjs from '../libs/dayjs';
import { v4 as uuidv4 } from 'uuid';


export function base64(value: string) {
  return btoa(value);
}

export function animateCSS(element: string, animationName: string, callback: any): void {
  const node: Element = $(element)[0];
  if (node === null || node === undefined) {
    return;
  }

  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
    if (node === null || node === undefined) {
      return;
    }

    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}

export function getErrorMessage(error: any): string {
  if (typeof error === 'string') {
    return error;
  }

  if (error.response === undefined) {
    return 'An unexpected error occurred.';
  }

  if (error.response.status === 401 && this.$router.currentRoute.name !== 'login') {
    this.$router.push({ name: 'logout' });
    return 'Unauthorized.';
  }

  if (error.status === 403) {
    return 'Forbidden.';
  }

  let errorMessage = '';
  try {
    const json = JSON.parse(error.response.data.message);
    $.each(json, (index) => {
      // eslint-disable-next-line no-prototype-builtins
      if (json.hasOwnProperty(index)) {
        errorMessage += `${json[index]}`;
      }
    });
    return errorMessage;
  } catch (exception) {
    return error.response.data.message;
  }
}

// Handle any error.
export function handleError(error: any): void {
  if (error.response === undefined) {
    return;
  }

  if (error.response.status === 401 && this.$router.currentRoute.name !== 'login') {
    this.$router.push({ name: 'logout' });
    return;
  }

  if (error.status === 403) {
    this.$router.push({ name: 'logout' });
  }
}

// Return decimal value of amount and that is amount / 100
export function getDecimalValue(amount: number): number {
  return amount / 100;
}

// Return percent value from decimal value
export function getPercentValue(value: number): number {
  return value * 100;
}

// Enforce negative amount
export function enforceNegativeAmount(amount: number): number {
  return -Math.abs(amount);
}

// Capitalize the first letter of every word in a string.
export function capitalizeWords(text: string): string {
  return text.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// create from time string
export function createFromTimeString(timeString: string, utc: boolean, local: boolean, format = 'HH:mm:ss'): dayjs.Dayjs {
  if (utc && local) {
    return dayjs.utc(timeString, format).local();
  }

  if (utc) {
    return dayjs.utc(timeString, format);
  }
  return dayjs(timeString, format);
}

export function toDayJsDate(date: string | Date, utc = false, inboundFormat?: string): dayjs.Dayjs {
  if (utc) {
    return dayjs(dayjs.utc(date, inboundFormat));
  }

  if (inboundFormat) {
    return dayjs(date, inboundFormat);
  }

  return dayjs(date);
}

// Return day in today's date
export function getTodayDate(hours = 0, minutes = 0, seconds = 0): dayjs.Dayjs {
  return dayjs().set({ hour: hours, minute: minutes, second: seconds });
}

export function getDayJs(): dayjs.Dayjs {
  return dayjs();
}

// Return behind date give a years from now
export function getBehindDateAYearsFromNow(year: number = 1): dayjs.Dayjs {
  return dayjs().subtract(year, 'year');
}

// Return end of month date
export function getEndOfMonthDate(): dayjs.Dayjs {
  return dayjs().endOf('month');
}

// Return date of the day of the current month
export function getDayOfCurrentMonth(day: number): dayjs.Dayjs {
  return dayjs().set({
    year: dayjs().year(), month: dayjs().month(), date: day, hour: 0, minute: 0, second: 0,
  });
}

// Return date difference from today in number of days
export function getDateDifferenceInDays(date1: dayjs.Dayjs, date2: dayjs.Dayjs): number {
  return date1.diff(date2, 'days');
}

export function getDateDifferenceInMonths(date1: dayjs.Dayjs, date2: dayjs.Dayjs): number {
  return date1.diff(date2, 'months');
}

export function getDateDifferenceInYears(date1: dayjs.Dayjs, date2: dayjs.Dayjs): number {
  return date1.diff(date2, 'years');
}

// Return a formatted date.
export function formatDate(date: string, format: string, utc: boolean, local: boolean): string {
  if (utc && local) {
    return dayjs(dayjs.utc(date).local()).format(format);
  }
  if (utc && !local) {
    return dayjs.utc(date).format(format);
  }
  return dayjs(date).format(format);
}

// Return a formatted date to database converted between UTC and the building's timezone
export function formatTimezoneDate(date: string, format: string, utc: boolean, timezone: string): string {
  if (!utc) {
    const timezoneDate = dayjs(date, format).tz(timezone);
    return timezoneDate.utc().format(format);
  }
  return dayjs(date, format).tz(timezone, true).format(format);
}

export function getLocalZoneAbbreviation(): string {
  return dayjs().tz(dayjs.tz.guess()).format('z');
}

export function formatDateFromNow(date: string, utc: boolean): string {
  if (utc) {
    if (this.getDateDifferenceInDays(dayjs.utc(), dayjs.utc(date)) < 28) {
      return `${dayjs.utc(date).fromNow(true)} ago`;
    }
    return dayjs.utc(date).format('MMM DD, YYYY');
  }
  if (this.getDateDifferenceInDays(dayjs(), dayjs(date)) < 28) {
    return `${dayjs(date).fromNow(true)} ago`;
  }
  return dayjs(date).format('MMM DD, YYYY');
}

export function formatTimeRemaining(timeRemaining: number, timeUnit: any): string {
  return dayjs(dayjs().add(timeRemaining, timeUnit)).fromNow(true);
}

// Return day of month 5th, 2nd, 3rd
export function dayOfMonth(day: number): string {
  return dayjs().date(day).format('Do');
}

// Return a formatted dollar amount.
export function formatMoney(amount: number): string {
  return `${amount < 0 ? '-' : ''}$${Math.abs(amount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}

export function findAndReplaceCharForPhoneNumber(phone: string): string[] | null {
  return (phone).replace(/\D/g, '').match(/^(1|124)?(\d{3})(\d{3})(\d{4})$/);
}

// Return a formatted mobile number
export function formatPhone(phone: string): string {
  if (phone) {
    const phoneNumber = this.findAndReplaceCharForPhoneNumber(phone);
    if (phoneNumber) {
      const intlCode = (phoneNumber[1] ? `+${phoneNumber[1]} ` : '');
      return [intlCode, '(', phoneNumber[2], ') ', phoneNumber[3], '-', phoneNumber[4]].join('');
    }
  }
  return phone;
}

// Return a formatted 10-digit phone number.
export function formatFirstLetterCapitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Return uuid
export function uuid(): string {
  return uuidv4();
}

// Return nonce key
export function nonce(length = 255) {
  let randomString = '';
  let randomASCII;

  for (let i = 0; i < length; i += 1) {
    randomASCII = Math.floor((Math.random() * 25) + 97);
    randomString += String.fromCharCode(randomASCII);
  }

  return randomString;
}

// Currency formatter
export function formatCurrency(value: number | string) {
  if (typeof value !== 'number') {
    return value;
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
}

// Return user device accessing app
export function deviceIdentifier() {
  const ua = navigator.userAgent;
  let tem: string[] | null = [];
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return (`IE ${tem[1]}` || 'IE');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  // eslint-disable-next-line
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(' v');
}

// Return nearest date
export function getNearestDate(dates: string[], format = 'YYYY-MM-DD'): string {
  const timestamps = dates.map((d: string) => Math.abs(dayjs().unix() - dayjs(d).unix()));
  const idx = timestamps.indexOf(Math.min(...timestamps));

  return idx !== -1 ? dayjs(dates[idx]).format(format) : '';
}


export function truncateString(str: string, length = 50, delimiter = '...') {
  if (str.length <= length) {
    return str;
  }

  return `${str.substring(0, length)}${delimiter}`;
}

export async function csvToJson(rawFile: any): Promise<any[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(rawFile, {
      header: true,
      skipEmptyLines: true,
      transformHeader(headerString) {
        return headerString.replace(/\d+/g, ' ')
          .split(/ |\B(?=[A-Z])/)
          .map(word => word.toLowerCase())
          .join('_');
      },
      complete(results, file) {
        resolve(results.data);
      },
      error(err, file) {
        reject(err);
      },
    });
  });
}

export async function jsonToCsv(rawData: any) {
  return Papa.unparse(rawData, { delimiter: ',' });
}

export function unicodeToText(unicode: string) {
  return String.fromCodePoint(parseInt(unicode, 16));
}

