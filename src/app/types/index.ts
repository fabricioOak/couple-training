export interface Exercise {
	name: string;
	type: "series" | "circuit";
	sets?: number | string;
	reps?: string;
	rest: string;
	equipment: string;
	work?: string;
	rounds?: number;
}

export interface WorkoutData {
	A: {
		ele: Exercise[];
		ela: Exercise[];
	};
	B: {
		ele: Exercise[];
		ela: Exercise[];
	};
	C: {
		ele: Exercise[];
		ela: Exercise[];
	};
}

export interface WorkoutProgress {
	[date: string]: {
		status: "ele" | "ela" | "ambos";
		notes: string;
	};
}

export interface Achievement {
	title: string;
	description: string;
	unlocked: boolean;
	icon: string;
}

export interface AchievementData {
	[key: string]: Achievement;
}

export type UserType = "ele" | "ela";
export type WorkoutDay = "A" | "B" | "C";
export type WorkoutStatus = "ele" | "ela" | "ambos" | "nenhum";
