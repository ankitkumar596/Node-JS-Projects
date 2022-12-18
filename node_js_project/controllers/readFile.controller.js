
const express = require('express')
const fs = require('fs')

function homepage(req, res, next) {
    res.status(200).send('this is the homepage')
    next();
}

function readFiledata(req, res) {
    // fs.readFile('./readme.txt', 'utf-8', (err, data) => {
    //     // if (err) {
    //     //     res.status(404).send({ message: 'file not found' })
    //     // }
    //     res.send(data);
    // })
    // next();
    // console.log('read file data');
    res.send('hellow file')
}

function writeFiledata(req, res, next) {
    const content = "writing the file wrteme.txt";
    fs.writeFile('./writeme.txt', content, (err) => {
        if (err) throw err;
    })
    next();

}


module.exports = { homepage, readFiledata, writeFiledata }