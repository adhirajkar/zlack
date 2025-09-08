import React from 'react'
import { SignInButton } from '@clerk/clerk-react'
import { MessageSquareDot, Video, Lock, Blocks } from 'lucide-react'

const AuthPage = () => {
  return (
    <div className="h-screen bg-[#4A154B] flex">
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-lg">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#4A154B] font-black text-2xl">
              <Blocks className="w-8 h-8" />
              </span>
            </div>
            <span className="text-white text-4xl font-bold">zlack</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Where work happens
          </h1>
          <p className="text-xl text-white/80">
            Zlack is a new way to communicate with your team. It's faster, better organized, and more secure than email.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-8 bg-purple-900/20">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Sign in to Zlack
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Continue with the workspace you're using
            </p>

            <div className="space-y-4">
              <SignInButton mode="modal">
                <button className="w-full cursor-pointer bg-[#4A154B] hover:bg-[#3a1149] text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02]">
                  Get Started 
                </button>
              </SignInButton>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Everything you need to work together</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                <MessageSquareDot className="w-5 h-5 text-purple-900" />
                  <span className="text-sm text-gray-600">Real-time messaging</span>
                </div>
                <div className="flex items-center space-x-3">
                <Video className="w-5 h-5 text-purple-900" />
                  <span className="text-sm text-gray-600">Video calls & meetings</span>
                </div>
                <div className="flex items-center space-x-3">
                <Lock className="w-5 h-5 text-purple-900"/>
                  <span className="text-sm text-gray-600">Secure and private</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default AuthPage