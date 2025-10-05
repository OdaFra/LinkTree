import bcrypt from 'bcrypt'

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

export const checkPassword = async (enteredPassword: string, hash: string) => {
    console.log(`This is password ${enteredPassword}`)
    console.log(`This is hash ${hash}`)

    return await bcrypt.compare(enteredPassword, hash)
    
}