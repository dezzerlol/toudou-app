import SignupForm from '../components/Authform/SignupForm'
import { verify } from '../services/verifyJwt'

const Signup = () => {
  return (
    <>
      <SignupForm />
    </>
  )
}

export default Signup

export async function getServerSideProps(context: any) {
  const cookie = context.req.cookies['AUTH_TOKEN']

  if (cookie) {
    const session = await verify(cookie)
    if (session)
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
      }
  }
  return {
    props: {},
  }
}