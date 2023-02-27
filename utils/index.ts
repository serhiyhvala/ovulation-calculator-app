import {addDays, addWeeks, format, isValid} from 'date-fns';
import {DATE_FORMAT} from '@/constants';

const calculateFertileWindow = (ovulationDate:number | Date) => {
	const fertileWindowStart = addDays(ovulationDate, -5)
	const fertileWindowEnd = addDays(ovulationDate, 1)
	return [fertileWindowStart, fertileWindowEnd]
};

const calculateOvulationDate = (lastPeriod:number | Date, cycleLength:number) => {
	return addDays(lastPeriod, cycleLength - 14)
};
const calculateNextPeriod = (lastPeriod:number | Date, cycleLength:number) => {
	return addDays(lastPeriod, cycleLength)
};

const calculatePregnancyTestDay = (lastPeriod:number | Date) => {
	return addWeeks(lastPeriod, 4)
};

const calculateExpectedDueDate = (lastPeriod:number | Date) => {
	return addDays(lastPeriod, 280)
};

const toNumber = (value: string) => {
	return isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10);
};

function isNotEmpty(value: string) {
	return value !== undefined && value !== null && value !== '';
}

function toFormatted(date: Date | null, formatString = DATE_FORMAT) {
	if (!isValid(date)) {
		return null;
	}
	// @ts-ignore
	return format(date, formatString);
}

function calculateOutcomes(lastPeriod:number | Date, cycleLength:number) {
	const ovulationDate = calculateOvulationDate(lastPeriod, cycleLength)
	const fertileWindow = calculateFertileWindow(ovulationDate)
	const nextPeriod = calculateNextPeriod(lastPeriod, cycleLength)
	const pregnancyTestDay = calculatePregnancyTestDay(lastPeriod)
	const expectedDueDate = calculateExpectedDueDate(lastPeriod)
	return {ovulationDate, fertileWindow, nextPeriod, pregnancyTestDay, expectedDueDate}
}

export {toNumber, isNotEmpty, toFormatted, calculateOutcomes};
