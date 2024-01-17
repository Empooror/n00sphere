
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import axios from 'axios'
import Seer from './Seer'

const queryClient = new QueryClient()

export default function Dashboard() {
  return (
    <QueryClientProvider client={queryClient}>
      <Survey />
    </QueryClientProvider>
  )
}

function Survey() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['surveyData'],
    queryFn: () =>
      axios
        .get('https://opensheet.elk.sh/1urt4Nxrn22iGy7kNV4T_cgbu2hOOyCGiPU6HbbLLUoE/Survey')
        .then((res) => res.data),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Seer data={data} />
  )
}

      
