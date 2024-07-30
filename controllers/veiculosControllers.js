const veiculos = [
    { modelo: 'Audi A1' },
    { modelo: 'Audi A2' },
    { modelo: 'Audi A3' },
    { modelo: 'Audi A4' },
]

const list = (request, response) => {
    response.json(veiculos)
}

const show = (request, response) => {
    const { id } = request.params
    const currentVeiculo = veiculos[id];

    if (currentVeiculo) {
        response.json(currentVeiculo);
    } else {
        response.status(404);
        response.json({
            message: 'Veiculo não encontrado'
        });
    }
}

module.exports = {
    list,
    show,
}