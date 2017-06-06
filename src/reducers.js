
const defaultState = {
    name: "Ariel Pchara",
    title: 'Desenvolvedor Fron-End',
    subtitle: 'Casa de ferreiro espeto de pau',
    contact: {
        email: 'ariel@pchara.com'
    }
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default reducer;