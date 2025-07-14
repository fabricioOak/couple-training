import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/lib/db";

interface RouteParams {
	params: {
		date: string;
	};
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ date: string }> }
) {
	try {
		const { date } = await params; // Note o await aqui
		await pool.query("DELETE FROM workouts_log WHERE log_date = $1", [date]);
		return NextResponse.json({ message: "Treino removido" });
	} catch (error) {
		console.error("Error deleting workout:", error);
		return NextResponse.json(
			{ error: "Erro ao remover treino" },
			{ status: 500 }
		);
	}
}
