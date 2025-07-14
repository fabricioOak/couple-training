import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function GET() {
	try {
		const result = await pool.query("SELECT * FROM achievements");
		return NextResponse.json(result.rows);
	} catch (error) {
		console.error("Erro ao buscar conquistas:", error);
		return NextResponse.json(
			{ error: "Erro ao buscar conquistas" },
			{ status: 500 }
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const { achievement_id } = await request.json();

		const result = await pool.query(
			"INSERT INTO achievements (achievement_id, unlocked_at) VALUES ($1, NOW()) ON CONFLICT (achievement_id) DO NOTHING RETURNING *",
			[achievement_id]
		);

		if (result.rows.length > 0) {
			return NextResponse.json(result.rows[0], { status: 201 });
		} else {
			return NextResponse.json(
				{ message: "Conquista já existe" },
				{ status: 200 }
			);
		}
	} catch (error) {
		console.error("Erro ao salvar conquista:", error);
		return NextResponse.json(
			{ error: "Erro ao salvar conquista" },
			{ status: 500 }
		);
	}
}
