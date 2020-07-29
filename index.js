//    0. Base a ser utilizada
const alunosDaEscola = [
    {nome:"Henrique",
    notas:[],
    cursos:[],
    faltas:5},

    {nome:"Edson",
    notas:[],
    cursos:[],
    faltas:2},

    {nome:"Bruno",
    notas:[10,9.8,9.6],
    cursos:[],
    faltas:0},

    {nome:"Guilherme",
    notas:[10,9.8,9.6],
    cursos:[{nomeDoCurso:"Full Stack", dataMatricula:new Date}],
    faltas:0},

    {nome:"Carlos",
    notas:[],
    cursos:[],
    faltas:0},

    {nome:"Lucca",
    notas:[10,9.8,9.6],
    cursos:[{nomeDoCurso:"UX", dataMatricula:new Date}],
    faltas:0}
];


//    1. Função adicionarAluno

//      Entrada
//        nome -> string (nome do aluno a ser adicionado no cadastro)
//      Saída
//        retorna comprimento do novo array de alunos
//        exibe mensagem de feedback que o aluno foi adicionado ao cadastro em caso de sucesso
//        exibe mensagem de feedback que o aluno não foi adicionado ao cadastro, em caso de fracasso

const adicionarAluno = nome => {
    let novoAluno = {
        nome,
        notas: [],
        cursos: [],
        faltas: 0
    };
    let numeroDeAlunosAnterior = alunosDaEscola.length;
    let numeroDeAlunosAtualizado = alunosDaEscola.push(novoAluno);
    if (numeroDeAlunosAtualizado > numeroDeAlunosAnterior && typeof(nome) == 'string') {
        console.log('O aluno ' + novoAluno.nome + ' foi adicionado com sucesso!');
        return alunosDaEscola.length;
    } else {
        console.log('O aluno não foi adicionado à lista.');
    };
};

// adicionando aluno novo ao cadastro de alunos
console.log('\nadicionando aluno novo ao cadastro de alunos');
console.log(adicionarAluno('Carla Scherer'));

// adicionando undefined ao cadastro de alunos
console.log('\nadicionando undefined ao cadastro de alunos');
console.log(adicionarAluno(undefined));
console.log(alunosDaEscola);


//    Função listarAlunos

//      Entrada
//        não tem entradas
//      Saída
//        retorna lista de alunos em formato amigável de leitura

const listarAlunos = () => {

    function listarArray(array) {
        array.forEach(elemento => console.log('  ' + elemento));
    };

    function listarObjeto(objetoNoArray) {
        objetoNoArray.forEach(elemento => {
            console.log('  Nome do curso: ' + elemento.nomeDoCurso);
            console.log('  Data de matrícula: ' + elemento.dataMatricula);
        });
    }

    console.log('\nLISTA DE ALUNOS\n');
    alunosDaEscola.forEach(aluno => {
        console.log('-'.repeat(30) + '\n');
        console.log('Nome do aluno: ' + aluno.nome);
        console.log('Notas do aluno: ');
        listarArray(aluno.notas);
        console.log('Cursos do aluno: ');
        listarObjeto(aluno.cursos);
        console.log('Número de faltas do aluno: ' + aluno.faltas);
        console.log('\n' + '-'.repeat(30));
    });
};

//listarAlunos();


//    Função buscarAluno

//      Entrada
//        nome -> string (nome do aluno a ser buscado)
//      Saída
//        se encontra o aluno no cadastro, retorna o número do aluno no array de alunos e mensagem de sucesso
//        se não encontra o aluno no cadastro, imprime mensagem de feedback que não encontrou o aluno

const buscarAluno = nome => {
    let resultadoBusca = alunosDaEscola.find(aluno => aluno.nome == nome);
    let alunoNumero = alunosDaEscola.indexOf(resultadoBusca);
    if (resultadoBusca != undefined) {
        console.log('Aluno ' + resultadoBusca.nome + ' encontrado com sucesso!');
        console.log('Número de cadastro do aluno: ' + alunoNumero);
        return alunoNumero;
    } else {
        console.log('O aluno não foi encontrado.');
    }
};

// buscando aluno que não está no cadastro
console.log('\nbuscando aluno que não está no cadastro');
buscarAluno('Carla');

// buscando aluno que está no cadastro
console.log('\nbuscando aluno que está no cadastro');
console.log(buscarAluno('Carla Scherer'));

//    Função matricularAluno

//  Entrada
//    alunoNumero -> int (número do aluno dentro do array de alunos)
//    curso -> string (nome do curso no qual o aluno será matriculado)
//   Saída
//    modifica o elemento no array de alunos, incluindo o novo curso e nova data dentro do index cursos
//    retorna feedback positivo com nome do aluno matriculado ou feedback negativo alertando que o aluno não se encontra no cadastro

const matricularAluno = (alunoNumero, curso) => {
    if (alunosDaEscola[alunoNumero] != undefined) {
        alunosDaEscola[alunoNumero].cursos.push({nomeDoCurso: curso, dataMatricula: new Date});
        console.log('Aluno ' + alunosDaEscola[alunoNumero].nome + ' matriculado com sucesso!');
        return alunosDaEscola[alunoNumero];
    } else {
        console.log('Aluno não existe no cadastro.');
    }
}

// matriculando aluno que existe no cadastro de alunos
console.log('\nmatriculando aluno que existe no cadastro de alunos');
console.log(matricularAluno(6, "Full Stack"));

// matriculando aluno que não existe no cadastro de alunos
console.log('\nmatriculando aluno que não existe no cadastro de alunos');
matricularAluno(8, 'Full Stack');

//    Função aplicarFalta

//      Entrada
//        alunoNumero -> int (número do aluno dentro do array de alunos)
//      Saída
//        retorna número de faltas do aluno, se ele está matriculado em algum curso, com feedback de sucesso
//        imprime mensagem de feedback quando aluno existe no cadastro mas não está matriculado em nenhum curso
//        imprime mensagem de feedback quando aluno não existe no cadastro

const aplicarFalta = alunoNumero => {
    if (alunosDaEscola[alunoNumero] != undefined) {
        if (alunosDaEscola[alunoNumero].cursos.length > 0) {
            alunosDaEscola[alunoNumero].faltas++;
            console.log('Número de faltas do aluno ' + alunosDaEscola[alunoNumero].nome + ' atualizado: ' + alunosDaEscola[alunoNumero].faltas);
            return alunosDaEscola[alunoNumero].faltas;
        } else {
            console.log('Aluno não está matriculado em nenhum curso.');
        }
    } else {
        console.log('Aluno não existe no cadastro.')
    }
}

// aplicando falta em um aluno cadastrado e matriculado em um curso
console.log('\naplicando falta em um aluno cadastrado e matriculado em um curso');
aplicarFalta(6);
aplicarFalta(6);

// buscando aluno no cadastro que não está matriculado em nenhum curso e aplicando falta
console.log('\nbuscando aluno no cadastro que não está matriculado em nenhum curso e aplicando falta');
buscarAluno('Bruno');
aplicarFalta(2);

// aplicando falta em um aluno que não existe no cadastro
console.log('\naplicando falta em um aluno que não existe no cadastro');
aplicarFalta(8);

//    Função aplicarFalta

//      Entrada
//        alunoNumero -> int (número do aluno dentro do array de alunos)
//        nota -> float (nota a ser cadastrada para o aluno)
//      Saída
//        retorna valor da última nota dada ao aluno, se ele está matriculado em algum curso, com feedback de sucesso
//        imprime mensagem de feedback quando aluno existe no cadastro mas não está matriculado em nenhum curso
//        imprime mensagem de feedback quando aluno não existe no cadastro

const aplicarNota = (alunoNumero, nota) => {
    if (alunosDaEscola[alunoNumero] != undefined) {
        if (alunosDaEscola[alunoNumero].cursos.length > 0) {
            alunosDaEscola[alunoNumero].notas.push(nota);
            console.log('Nota do aluno ' + alunosDaEscola[alunoNumero].nome + ' cadastrada: ' + alunosDaEscola[alunoNumero].notas[alunosDaEscola[alunoNumero].notas.length-1]);
            return alunosDaEscola[alunoNumero].notas[alunosDaEscola[alunoNumero].notas.length-1];
        } else {
            console.log('Aluno não está matriculado em nenhum curso.');
        }
    } else {
        console.log('Aluno não existe no cadastro.')
    }
}

// aplicando nota a um aluno cadastrado e matriculado em um curso
console.log('\naplicando nota a um aluno cadastrado e matriculado em um curso');
aplicarNota(6, 6.1);
aplicarNota(6, 8.2);
console.log(alunosDaEscola[6].notas);

// aplicando nota a um aluno que não está matriculado em nenhum curso
console.log('\naplicando nota a um aluno que não está matriculado em nenhum curso');
aplicarNota(2, 6.1);

// aplicando nota a um aluno que não existe no cadastro
console.log('\naplicando nota a um aluno que não existe no cadastro');
aplicarNota(8, 6.1);