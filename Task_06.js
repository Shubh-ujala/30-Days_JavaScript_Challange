import _ from 'lodash'

const myarr = [1,2,3,4,6];
console.log(_.reverse(myarr))//[ 6, 4, 3, 2, 1 ]
console.log(_.chunk(myarr,1));//[ [ 6 ], [ 4 ], [ 3 ], [ 2 ], [ 1 ] ]