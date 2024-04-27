let user ={
    name: "Dimych",
    age:13,
    address:{
        city:{
            title: "Minsk"
        }
    }
}
//console.log(user.address.city.title)
//console.log(user["address"]["city"]["title"])
let user1 ={
    '0': 'Dimych',
    '1': 'Valera'
}
// console.log(user1['0'])
 user1 ['table']= "brown"
// console.log(user1)
 console.log(user1["table"]) //brown

console.log(Object.keys(user1))//[ '0', '1', 'table' ]

console.log(Object.values(user1))//[ 'Dimych', 'Valera', 'brown' ]
