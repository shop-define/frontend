import axios from 'axios'

export const POSTEmailData = async (data_email: string | null | undefined) => {
  try {
    const response = await axios.post('http://localhost:3003/api/auth/login', { email: data_email })
    return response
  } catch (err) {
    console.error('There was an error adding new user:', err)
  }
}
