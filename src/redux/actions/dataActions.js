export const Type = {
    CHANGE_DATA: "CHANGE_DATA",
}

export const changeData = data => ({
    type: Type.CHANGE_DATA,
    payload: data,
})
