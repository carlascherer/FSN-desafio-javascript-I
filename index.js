// Base a ser utilizada
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


//   Função adicionarAluno

const adicionarAluno = nome => {
    let novoAluno = {
        nome,
        notas: [],
        cursos: [],
        faltas: 0
    };
    let numeroDeAlunosAnterior = alunosDaEscola.length;
    let numeroDeAlunosAtualizado = alunosDaEscola.push(novoAluno);
    if (numeroDeAlunosAtualizado > numeroDeAlunosAnterior) {
        console.log('O aluno ' + novoAluno.nome + ' foi adicionado com sucesso!');
    } else {
        console.log('O aluno não foi adicionado à lista.');
    };
    return alunosDaEscola.length;
};

console.log(adicionarAluno('Carla Scherer'));

//    Função listarAlunos

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

listarAlunos();

//    Função buscarAluno

const buscarAluno = nome => {
    let resultadoBusca = alunosDaEscola.filter(aluno => aluno.nome == nome);
    if (resultadoBusca.length > 0) {
        console.log('Aluno ' + resultadoBusca[0].nome + ' encontrado com sucesso!');
    } else {
        console.log('O aluno não foi encontrado.');
    }
    return resultadoBusca[0].nome;
};

buscarAluno('Carla Scherer');