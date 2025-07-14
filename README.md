# 🏠 O Seu Ginásio em Casa

Uma aplicação web para casais treinarem juntos em casa, com planos personalizados, acompanhamento de progresso e sistema de conquistas.

## 🎯 Sobre

Plataforma de treinos domiciliares com objetivos específicos:
- **Para Ele**: Condicionamento físico e resistência
- **Para Ela**: Saúde, emagrecimento e tonificação

## ✨ Funcionalidades

- 📋 **Dashboard de Treinos** - Treinos A, B e C personalizados
- 📚 **Biblioteca de Exercícios** - 25+ exercícios com instruções detalhadas
- 📊 **Acompanhamento de Progresso** - Calendário interativo e estatísticas
- 🏆 **Sistema de Conquistas** - 35+ conquistas gamificadas
- 🥗 **Guia de Nutrição** - Orientações e receitas saudáveis

## 🛠️ Tecnologias

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, PostgreSQL
- **Deployment**: Vercel (frontend), Railway/Heroku (database)

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/couple-training.git
cd couple-training

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais do PostgreSQL

# Execute o projeto
npm run dev
```

## 📁 Estrutura

```
src/
├── app/           # Pages e API routes
├── components/    # Componentes React
├── hooks/         # Custom hooks
├── lib/           # Utilitários e dados
└── types/         # Tipos TypeScript
```

## 🗄️ Banco de Dados

```sql
-- Criar tabelas necessárias
CREATE TABLE workouts_log (
    log_date DATE PRIMARY KEY,
    status VARCHAR(10),
    notes TEXT
);

CREATE TABLE achievements (
    achievement_id VARCHAR(50) PRIMARY KEY,
    unlocked_at TIMESTAMP NOT NULL
);
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

⭐ **Gostou do projeto? Deixe uma estrela!**
