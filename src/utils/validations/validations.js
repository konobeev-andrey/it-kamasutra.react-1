export const required = value => {
    if(value) return undefined
    return 'field is required'
}

export const maxLengthCreator = maxValue => value => {
    if(value && value.length > maxValue ) return `Max length is ${maxValue} symbols`
    return undefined
}
