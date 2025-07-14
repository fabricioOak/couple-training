import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ date: string }> }
) {
	try {
		const { date } = await params; // Note o await aqui

		const deleteResult = await pool.query(
			"DELETE FROM workouts_log WHERE log_date = $1 RETURNING *",
			[date]
		);

		return NextResponse.json({
			message: "Treino removido com sucesso",
			deleted: deleteResult.rows[0],
		});
	} catch (error) {
		console.error("Erro ao deletar treino:", error);
		return NextResponse.json(
			{
				error: "Erro ao deletar treino",
			},
			{ status: 500 }
		);
	}
}
