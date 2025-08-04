import { useMemo, useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import SignIn from '@/pages/signin-signup/components/signin'
import SignUp from '@/pages/signin-signup/components/signup'
import LoginImage from '@/assets/images/login.webp'

export default function SignInSignUp() {
  const [currentTab, setCurrentTab] = useState('signin')
  const TAB_DATA = useMemo(() => [
    {
      label: 'Sign In',
      value: 'signin',
      component: <SignIn />
    },
    {
      label: 'Sign Up',
      value: 'signup',
      component: <SignUp />
    }
  ], [])
  console.log("currentTab >>>>>>>", currentTab)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">

        {/* Left - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
            {/* <SignIn /> */}
            <Tabs defaultValue={TAB_DATA[0]?.value} className="w-full" >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                {
                  TAB_DATA.map((tab: any, i: number) => (
                    <TabsTrigger key={i} value={tab.value} onClick={(_event: any) => setCurrentTab(tab.value)} >{tab.label}</TabsTrigger>
                  ))
                }
              </TabsList>
              {
                TAB_DATA.map((tab: any, i: number) => (
                  <TabsContent value={tab?.value} key={i}>{tab.component}
                  </TabsContent>
                ))
              }
            </Tabs>
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={LoginImage}
            alt="Login visual"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>

  );
};

