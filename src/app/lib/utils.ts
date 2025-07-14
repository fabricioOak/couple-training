import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
	return clsx(inputs);
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString("pt-BR", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export function getWeekNumber(date: Date): number {
	const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
	const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
	return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

export function calculateStreak(progressData: Record<string, any>): number {
	const sortedDates = Object.keys(progressData).sort();
	if (sortedDates.length === 0) return 0;

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	let streak = 0;
	let currentDate = new Date(sortedDates[sortedDates.length - 1]);
	currentDate.setHours(0, 0, 0, 0);

	// Check if last workout was today or yesterday
	const diffTime = today.getTime() - currentDate.getTime();
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays <= 1) {
		streak = 1;
		for (let i = sortedDates.length - 2; i >= 0; i--) {
			const nextDate = new Date(sortedDates[i]);
			nextDate.setHours(0, 0, 0, 0);
			const dayDiff =
				(currentDate.getTime() - nextDate.getTime()) / (1000 * 60 * 60 * 24);

			if (dayDiff === 1) {
				streak++;
				currentDate = nextDate;
			} else {
				break;
			}
		}
	}

	return streak;
}
