import PostCard from "../../../components/PostCard"
import Home from "../home/page"

const saveFormData = async (res,req) => {
    const {email,password} = req.body
   const body = req.body
   console.log(body)
   req = new FormData
   console.log('great')
  console.log(res.searchParams.email)
  console.log(req)
  return <Home/>
}
export default saveFormData