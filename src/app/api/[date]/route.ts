import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { date: string } }
) {
	try {
		const { date } = params;

		console.log("Tentando deletar treino da data:", date);

		// Verificar se o treino existe antes de deletar
		const checkResult = await pool.query(
			"SELECT * FROM workouts_log WHERE log_date = $1",
			[date]
		);

		if (checkResult.rows.length === 0) {
			console.log("Treino não encontrado para a data:", date);
			return NextResponse.json(
				{ error: "Treino não encontrado" },
				{ status: 404 }
			);
		}

		// Deletar o treino
		const deleteResult = await pool.query(
			"DELETE FROM workouts_log WHERE log_date = $1 RETURNING *",
			[date]
		);

		console.log("Treino deletado com sucesso:", deleteResult.rows[0]);

		return NextResponse.json({
			message: "Treino removido com sucesso",
			deleted: deleteResult.rows[0],
		});
	} catch (error) {
		console.error("Erro ao deletar treino:", error);
		return NextResponse.json(
			{
				error: "Erro interno do servidor ao deletar treino",
				details: error instanceof Error ? error.message : "Erro desconhecido",
			},
			{ status: 500 }
		);
	}
}

// Adicionar GET para debugging
export async function GET(
	request: NextRequest,
	{ params }: { params: { date: string } }
) {
	try {
		const { date } = params;
		const result = await pool.query(
			"SELECT * FROM workouts_log WHERE log_date = $1",
			[date]
		);

		return NextResponse.json(result.rows[0] || null);
	} catch (error) {
		console.error("Erro ao buscar treino:", error);
		return NextResponse.json(
			{ error: "Erro ao buscar treino" },
			{ status: 500 }
		);
	}
}
