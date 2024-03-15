import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

const ProfilePage = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <div className='container min-h-screen mx-auto my-5 p-5'>
      <div className='md:flex no-wrap md:-mx-2 '>
        {/* <!-- Left Side --> */}
        <div className='w-full md:w-3/12 md:mx-2'>
          <div className='bg-white p-3 '>
            <h1 className='text-gray-900 font-bold text-xl leading-8 my-1'>
              {user?.given_name} {user?.family_name}
            </h1>
            <h3 className='text-gray-600 font-lg text-semibold leading-6'>
              {user?.email}
            </h3>

            <LogoutLink className='inline-block mt-5 underline hover:no-underline'>
              Log out
            </LogoutLink>
          </div>
        </div>
        {/* <!-- Right Side --> */}
        <div className='w-full md:w-9/12 mx-2 h-64'>
          <div className='bg-white p-3 shadow-sm rounded-sm'>
            <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
              <span className='text-blue-500'>
                <svg
                  className='h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </span>
              <span className='tracking-wide'>Favorite images</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage
