import AuthWrapper from '@/components/auth/AuthWrapper'
import AddPostForm from '@/components/pages/our-community/AddPostForm'

const page = () => {
  return (
    <AuthWrapper>
      <AddPostForm />
    </AuthWrapper>
  )
}

export default page