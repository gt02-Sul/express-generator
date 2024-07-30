const home = (request, response) => {
    response.render('index', { title: 'Express' });
}


const about = (request, response) => {
    response.render('index', { title: 'Express' });
}




module.exports = {
    home,
    about,
}