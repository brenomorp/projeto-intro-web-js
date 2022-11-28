const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quibusdam laudantium debitis dolore quia amet cum inventore, vitae enim ea eaque voluptate aperiam in ratione eos, repellat harum vero autem!",
        duracao: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quibusdam laudantium debitis dolore quia amet cum inventore, vitae enim ea eaque voluptate aperiam in ratione eos, repellat harum vero autem!",
        duracao: "2 meses",
        valor: 900
    },
    {
        curso: "APIsRest",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quibusdam laudantium debitis dolore quia amet cum inventore, vitae enim ea eaque voluptate aperiam in ratione eos, repellat harum vero autem!",
        duracao: "6 meses",
        valor: 2000
    }
];

const turmas = [
    {
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroAlunos: "150",
        periodo: "Noturno",
        concluida: false
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroAlunos: "200",
        periodo: "Integral",
        concluida: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroAlunos: "180",
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroAlunos: "80",
        periodo: "Integral",
        concluida: false
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroAlunos: "200",
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroAlunos: "100",
        periodo: "Integral",
        concluida: true
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroAlunos: "200",
        periodo: "Notruno",
        concluida: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroAlunos: "90",
        periodo: "Integral",
        concluida: false
    },
];

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: "900",
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: "2000",
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "500",
        nParcelas: 1,
        desconto: true,
        parcelas: 500
    }
];

const carrinhoCursos = [500, 900, 400]

const parcelarCurso = (parcelas, carrinho) => {
    let desconto = 1
    let total = 0

    if (parcelas < 3) {
        desconto -= .2
    }

    switch (carrinho.length) {
        case 3:
            desconto -= .15

            break;

        case 2:
            desconto -= .1

            break;
    }

    for (let i in carrinho) {
        total += carrinho[i]
    }

    console.log(`O valor do pagamento é de R$ ${total * desconto} com desconto, parcelado em ${parcelas}x de R$ ${(total * desconto) / 2}`);
}

const buscarCurso = (curso) => {
    for (let i in cursos) {
        if (cursos[i].curso === curso) {
            console.log(cursos[i].curso);
        } else {
            console.log("Curso não encontrado.");
        }
    }
}

const buscarTurma = (turma) => {
    for (let i in turmas) {
        if (turmas[i].turma === turma) {
            console.log(turmas[i].turma);
        } else {
            console.log("Turma não encontrada.");
        }
    }
}

const buscarEstudante = (estudante) => {
    for (let i in estudantes) {
        if (estudantes[i].estudante === estudante) {
            console.log(estudantes[i].estudante);
        } else {
            console.log("Estudante não encontrado.");
        }
    }
}

const matricular = (nome, curso, turma, nParcelas) => {
    let novoEstudante = {
        estudante: nome,
        turma: turma,
        curso: curso,
        nParcelas: nParcelas
    }

    estudantes.push(novoEstudante)
    console.log(`Aluno matriculado
    Nome: ${nome}
    Curso: ${curso}
    Turma: ${turma}`);
    console.log(estudantes);
}

parcelarCurso(2, carrinhoCursos)
// buscarCurso("HTML e CSS")
// buscarTurma("Hipátia")
// buscarEstudante("Chris Evans")
// matricular("Breno", "JavaScript", "Ozemela", 12)
