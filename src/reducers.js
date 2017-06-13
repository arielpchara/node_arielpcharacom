
const defaultState = {
    name: "Ariel Pchara",
    title: 'Desenvolvedor Fron-End/JavaScript/NodeJS/MongoDB',
    subtitle: 'Casa de ferreiro espeto de pau',
    contact: {
        email: 'ariel@pchara.com'
    },
    srcIcon: 'images/icon.png'
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default reducer;