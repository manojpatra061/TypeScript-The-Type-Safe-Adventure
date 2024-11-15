// as const (type assertion) - shorthand to make readonly type variables

const withOutAsConst = ['red', 'green', 'blue']
withOutAsConst[2] = 'blue-new'
console.log(withOutAsConst) //["red", "green", "blue-new"] 

const withAsConst = ["red", "green", "blue"] as const
// withAsConst[2] = 'blue-new' //error

const readonlyTypedVariable: readonly["red", "green", "blue"] = ["red", "green", "blue"] 
// readonlyTypedVariable[2] = 'blue-new' //error

// the types of withAsConst and readonlyTypedVariable are the same now