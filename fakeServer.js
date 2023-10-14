import data from './movieData.json';
//import uuid from 'react-native-uuid';

//data.map((item) => (item.id = uuid.v4()))

let lastItem = ''

export const fakeServer = qty => 
    new Promise((resolve, reject) => {
        let newArr
        const lastItemIndex = data.indexOf(lastItem)
        if (lastItemIndex === data.length - 1) return resolve('done')

        if (!lastItem){
            newArr = [...data].slice(0, qty)
            lastItem = [...newArr].pop()
        } else {
            const newIndex = data.indexOf(lastItem) + 1
            newArr = [...data].slice(newIndex, qty + newIndex)
            lastItem = [...newArr].pop()
        }
        setTimeout(() => {
            resolve(newArr)
        }, 300)
    })