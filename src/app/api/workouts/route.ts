import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function GET() {
	try {
		const result = await pool.query(
			"SELECT * FROM workouts_log ORDER BY log_date DESC"
		);
		return NextResponse.json(result.rows);
	} catch (error) {
		console.error("Error fetching workouts:", error);
		return NextResponse.json(
			{ error: "Erro ao buscar treinos" },
			{ status: 500 }
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const { date, status, notes } = await request.json();

		const result = await pool.query(
			"INSERT INTO workouts_log (log_date, status, notes) VALUES ($1, $2, $3) ON CONFLICT (log_date) DO UPDATE SET status = $2, notes = $3 RETURNING *",
			[date, status, notes]
		);

		return NextResponse.json(result.rows[0], { status: 201 });
	} catch (error) {
		console.error("Error saving workout:", error);
		return NextResponse.json(
			{ error: "Erro ao salvar treino" },
			{ status: 500 }
		);
	}
}
