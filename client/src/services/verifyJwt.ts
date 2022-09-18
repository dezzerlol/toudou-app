import { jwtVerify } from 'jose'

export async function verify(token: string): Promise<any> {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))
  // run some checks on the returned payload, perhaps you expect some specific values
 
  // if its all good, return it, or perhaps just return a boolean
  return payload
}
