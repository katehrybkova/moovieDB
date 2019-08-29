export const Type = {
    CHANGE_LINK: "CHANGE_LINK",
}

export const changeLink = link => ({
    type: Type.CHANGE_LINK,
    payload: link,
})
