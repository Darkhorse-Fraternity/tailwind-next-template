import { LoginPostResponse, LoginPostReuqest } from './http-api-type'
import { useHTMAPIService } from './usHttpService'

export const useLoginApi = () => {
  return useHTMAPIService<LoginPostResponse, LoginPostReuqest>({
    key: '/api/sign',
    method: 'POST',
  })
}
