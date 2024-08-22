const Object = {
    email: 'leonardolobas',
    emailRegex: '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
    senha: '123456',
    senhaRegex: '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/'
}




const Validation = ({ type, value }) => {
    const regex = type === 'email' ? Object.loginRegex : Object.senhaRegex;
    const isValid = new RegExp(regex).test(value);

    if (!isValid) {
        alert(`${type} invalido`)
    }
}

export default Validation
