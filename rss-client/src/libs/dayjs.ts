import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import updateLocale from 'dayjs/plugin/updateLocale';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isToday from 'dayjs/plugin/isToday';


dayjs.extend(utc);
dayjs.extend(tz);
dayjs.extend(advanceFormatDayJs);
dayjs.extend(relativeTime);
dayjs.extend(isBetWeen);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(objectSupport);
dayjs.extend(updateLocale);
dayjs.extend(customParseFormat);
dayjs.extend(isToday);


export default dayjs;