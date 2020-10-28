const basePath = window.location.origin

export const dataService = {
    getData
}


function getData(){
    return fetch( basePath + '/public/data.json')
        .then(res => res.json())
        .then(res => res);
}